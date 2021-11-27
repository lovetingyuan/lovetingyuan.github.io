[meta]: <javascript> (title: 'Promise的polyfill实现', keywords: 'promise, polyfill', date: '2020-8-30')

## Promise的polyfill实现

```javascript
// 用来resolve一个值，这个值可能是pomise,thenable或者其他
function resolveValue (promise, value, resolve, reject) {
  if (promise === value) { // 不能resolve自身
    return reject(new TypeError('Can not resolve or return the current promise.'))
  }
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
    return resolve(value)
  }
  let then // thenable可能是对象或者函数，它的then只能读取一次并且需要捕获可能的错误
  try {
    then = value.then
  } catch (err) {
    return reject(err)
  }
  if (typeof then !== 'function') return resolve(value)
  let called = false // 所有的回调只能调用一次
  try { // 处理thenable，当然promise本身也是thenable
    then.call(value, val => {
      if (called) return
      called = true
      resolveValue(promise, val, resolve, reject) // 需要递归resolve，因为可能多次返回thenable
    }, err => {
      if (called) return
      called = true
      reject(err) // reject就直接调用即可
    })
  } catch (err) {
    if (!called) reject(err)
  }
}

function Promise (callback) {
  if (!(this instanceof Promise)) throw new TypeError('Promise cannot be invoked without "new".')
  if (typeof callback !== 'function') throw new TypeError('Promise callback is not a function.')
  this._status = 'pending'
  this._value = undefined
  this._callbacks = { resolved: [], rejected: [] }
  const settle = (status, value) => {
    this._value = value
    this._status = status
    this._callbacks[status].forEach(cb => cb(value))
  }
  let called = false
  const onResolve = value => {
    if (called) return
    called = true
    resolveValue(this, value, val => settle('resolved', val), err => settle('rejected', err))
  }
  const onReject = err => {
    if (called) return
    called = true
    settle('rejected', err)
  }
  try {
    callback(onResolve, onReject)
  } catch (err) {
    onReject(err)
  }
}

Promise.prototype.then = function then (onResolve, onReject) {
  const handleCallback = (promise, status, resolve, reject) => {
    const callback = status === 'resolved' ? onResolve : onReject
    const settle = status === 'resolved' ? resolve : reject
    setTimeout(() => { // then的回调需要延迟执行，实际应该放到微任务队列中
      try {
        if (typeof callback === 'function') {
          resolveValue(promise, callback(this._value), resolve, reject)
        } else {
          settle(this._value)
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  let promise // then必须返回一个新的promise
  if (this._status === 'pending') { // 如果是异步执行需要先把回调存储在队列中
    promise = new Promise((resolve, reject) => {
      this._callbacks.resolved.push(() => handleCallback(promise, 'resolved', resolve, reject))
      this._callbacks.rejected.push(() => handleCallback(promise, 'rejected', resolve, reject))
    })
  } else {
    let resolve, reject
    promise = new Promise((...args) => [resolve, reject] = args)
    handleCallback(promise, this._status, resolve, reject)
  }
  return promise
}

```

-----

以上是对`Promise`的简单实现，实际上Promise/A+规范只要求实例对象必须要有then方法，ES规范中还规定了一些静态和实例方法，这些都可以依赖Promise核心来实现

* `Promise.prototype.catch`
  ```javascript
  Promise.prototype.catch = function (onReject) {
    return this.then(null, onReject)
  }
  ```
* `Promise.prototype.finally`
  ```javascript
  Promise.prototype.finally = function (callback) {
    return this.then(val => {
      return Promise.resolve(callback()).then(() => val)
    }, err => {
      return Promise.resolve(callback()).then(() => { throw err })
    })
  }
  ```
* `Promise.resolve` & `Promise.reject`
  ```javascript
  Promise.resolve = function resolve (val) {
    return val instanceof Promise ? val : new Promise((resolve) => resolve(val))
  }
  Promise.reject = function reject (reason) {
    return new Promise((_, reject) => reject(reason))
  }
  ```
* `Promise.all`
  ```javascript
  Promise.all = function all (values) {
    return new Promise((resolve, reject) => {
      // 实际上这里的values只要是可迭代对象就可以，这里简化了判断，其他方法也一样
      if (!Array.isArray(values)) throw new TypeError('Promise.all only accepts iterable value.')
      const resolvedValues = [], len = values.length
      if (len === 0) return resolve(resolvedValues)
      for (let i = 0; i < len; i++) {
        Promise.resolve(values[i]).then(val => {
          resolvedValues[i] = val
          if (i === len - 1) {
            resolve(resolvedValues)
          }
        }, err => {
          reject(err) // 一旦错过就不再
        })
      }
    })
  }
  ```
* `Promise.allSettled`
  ```javascript
  Promise.allSettled = function allSettled (values) {
    return new Promise((resolve) => {
      if (!Array.isArray(values)) throw new TypeError('Promise.allSettled only accepts iterable value.')
      const resolvedValues = [], len = values.length
      if (len === 0) return resolve(resolvedValues)
      for (let i = 0; i < len; i++) {
        Promise.resolve(values[i]).then(val => {
          resolvedValues[i] = {
            status: 'fulfilled', value: val
          }
          if (i === len - 1) {
            resolve(resolvedValues)
          }
        }, err => {
          resolvedValues[i] = {
            status: 'rejected', reason: err
          }
          if (i === len - 1) {
            resolve(resolvedValues)
          }
        })
      }
    })
  }
  ```
* `Promise.race`，谁先结束就返回谁
  ```javascript
  Promise.race = function race (values) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(values)) throw new TypeError('Promise.race only accepts iterable value.')
      for (let i = 0; i < values.length; i++) {
        Promise.resolve(values[i]).then(resolve, reject)
      }
    })
  }
  ```
* [`Promise.any`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)，和`Promise.all`在功能上是相反的，会尝试返回第一个成功的promise，如果都失败那就以`AggregateError`来reject
  ```javascript
  Promise.any = function any (values) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(values)) throw new TypeError('Promise.any only accepts iterable value.')
      const resolvedReasons = [], len = values.length
      if (len === 0) return reject(new AggregateError(resolvedReasons, 'All promises were rejected'))
      for (let i = 0; i < len; i++) {
        Promise.resolve(values[i]).then(val => {
          resolve(val)
        }, err => {
          resolvedReasons[i] = err
          if (i === len - 1) {
            reject(new AggregateError(resolvedReasons, 'All promises were rejected'))
          }
        })
      }
    })
  }
  ```
