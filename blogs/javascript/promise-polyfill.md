[meta]: javascript "title: 'Promise的polyfill实现', keywords: 'promise, polyfill', date: '2020-8-30'"

## Promise 的 polyfill 实现

```javascript
function resolveValue(value, resolve, reject) {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
    return resolve(value)
  }
  try {
    var then = value.then // thenable只能读取一次并且需要捕获可能的错误
  } catch (err) {
    return reject(err)
  }
  if (typeof then !== 'function') {
    return resolve(value)
  }
  let called = false // 所有的回调只能调用一次
  try {
    then.call(
      value,
      val => {
        if (!called) {
          called = true
          resolveValue(val, resolve, reject) // 需要递归resolve，因为可能多次返回thenable
        }
      },
      reason => {
        if (!called) {
          called = true
          reject(reason) // reject就直接调用即可
        }
      }
    )
  } catch (err) {
    called || reject(err)
  }
}

function Promise(callback) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Promise cannot be invoked without "new".')
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Promise callback is not a function.')
  }
  ;[this._status, this._value] = ['pending']
  this._callbacks = { resolved: [], rejected: [] }
  const fulfill = (status, value) => {
    if (this._status === 'pending') {
      // 状态只能变更一次
      ;[this._status, this._value] = [status, value]
      this._callbacks[status].forEach(cb => cb(value))
    }
  }
  try {
    callback(
      value => {
        if (this === value) {
          // 不能返回自身
          fulfill('rejected', new TypeError('Can not resolve or return the current promise.'))
        } else {
          resolveValue(
            value,
            val => {
              fulfill('resolved', val)
            },
            reason => {
              fulfill('rejected', reason)
            }
          )
        }
      },
      reason => {
        fulfill('rejected', reason) // reject 直接返回值
      }
    )
  } catch (err) {
    fulfill('rejected', err)
  }
}

Promise.prototype.then = function then(onResolve, onReject) {
  const promise = new Promise((resolve, reject) => {
    const handleCallback = resolved => {
      setTimeout(() => {
        // then的回调需要在新的事件循环中执行
        const callback = resolved ? onResolve : onReject
        if (typeof callback !== 'function') {
          return (resolved ? resolve : reject)(this._value)
        }
        try {
          var val = callback(this._value)
        } catch (err) {
          return reject(err)
        }
        if (promise === val) {
          // 返回的值不能是promise本身(TypeError: Chaining cycle detected for promise)
          reject(new TypeError('Can not resolve or return the current promise.'))
        } else {
          resolveValue(val, resolve, reject)
        }
      })
    }
    if (this._status === 'pending') {
      this._callbacks.resolved.push(() => handleCallback(true))
      this._callbacks.rejected.push(() => handleCallback(false))
    } else {
      handleCallback(this._status === 'resolved')
    }
  })
  return promise
}
```

---

以上是对`Promise`的简单实现，实际上 Promise/A+规范只要求实例对象必须要有 then 方法，ES 规范中还规定了一些静态和实例方法，这些都可以依赖 Promise 核心来实现

- `Promise.prototype.catch`
  ```javascript
  Promise.prototype.catch = function (onReject) {
    return this.then(null, onReject)
  }
  ```
- `Promise.prototype.finally`
  ```javascript
  Promise.prototype.finally = function (callback) {
    return this.then(
      val => {
        return Promise.resolve(callback()).then(() => val)
      },
      err => {
        return Promise.resolve(callback()).then(() => {
          throw err
        })
      }
    )
  }
  ```
- `Promise.resolve` & `Promise.reject`
  ```javascript
  Promise.resolve = function resolve(val) {
    return val instanceof Promise ? val : new Promise(resolve => resolve(val))
  }
  Promise.reject = function reject(reason) {
    return new Promise((_, reject) => reject(reason))
  }
  ```
- `Promise.all`

  ```javascript
  Promise.all = function all(values) {
    return new Promise((resolve, reject) => {
      // 实际上这里的values只要是可迭代对象就可以，这里简化了判断，其他方法也一样
      if (!Array.isArray(values)) {
        throw new TypeError('Promise.all only accepts iterable value.')
      }
      const resolvedValues = []
      const taskCount = values.length
      const resolvedCount = 0
      if (resolvedCount === taskCount) {
        return resolve(resolvedValues)
      }
      for (let i = 0; i < taskCount; i++) {
        Promise.resolve(values[i]).then(val => {
          resolvedValues[i] = val
          resolvedCount++
          if (resolvedCount === taskCount) {
            resolve(resolvedValues)
          }
        }, reject)
      }
    })
  }
  ```

- [`Promise.allSettled`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)，等待所有 promise 结束，返回一个结果数组

  ```js
  Promise.allSettled = function (promises) {
    return new Promise(function (resolve) {
      var results = []
      var remaining = promises.length

      function onSettled(result, index) {
        results[index] = {
          status: 'fulfilled',
          value: result
        }

        remaining--

        if (remaining === 0) {
          resolve(results)
        }
      }

      function onRejected(error, index) {
        results[index] = {
          status: 'rejected',
          reason: error
        }

        remaining--

        if (remaining === 0) {
          resolve(results)
        }
      }

      for (var i = 0; i < promises.length; i++) {
        promises[i].then(
          function (result) {
            onSettled(result, i)
          },
          function (error) {
            onRejected(error, i)
          }
        )
      }
    })
  }
  ```

- [`Promise.race`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)，谁先结束就返回谁

  ```js
  Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
      for (var i = 0; i < promises.length; i++) {
        promises[i].then(resolve, reject)
      }
    })
  }
  ```

- [`Promise.any`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)，和`Promise.all`在功能上是相反的，会尝试返回第一个成功的 promise，如果都失败那就以`AggregateError`来 reject

  ```js
  if (!Promise.any) {
    Promise.any = function (promises) {
      return new Promise(function (resolve, reject) {
        const errors = []
        let remaining = promises.length

        function onFulfilled(value) {
          resolve(value)
        }

        function onRejected(error) {
          errors.push(error)
          remaining--

          if (remaining === 0) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        }

        for (var i = 0; i < promises.length; i++) {
          promises[i].then(onFulfilled, onRejected)
        }
      })
    }
  }
  ```

- [`Promise.withResolvers`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)

  ```js
  if (typeof Promise.withResolvers === 'undefined') {
    Promise.withResolvers = function () {
      let resolve, reject
      const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
      })
      return { promise, resolve, reject }
    }
  }
  ```
