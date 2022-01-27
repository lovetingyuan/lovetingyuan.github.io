var e=`<h2>Promise\u7684polyfill\u5B9E\u73B0</h2>
<pre><code class="language-javascript">function resolveValue (value, resolve, reject) {
  if (value === null || (typeof value !== 'object' &amp;&amp; typeof value !== 'function')) {
    return resolve(value)
  }
  try {
    var then = value.then // thenable\u53EA\u80FD\u8BFB\u53D6\u4E00\u6B21\u5E76\u4E14\u9700\u8981\u6355\u83B7\u53EF\u80FD\u7684\u9519\u8BEF
  } catch (err) {
    return reject(err)
  }
  if (typeof then !== 'function') {
    return resolve(value)
  }
  let called = false // \u6240\u6709\u7684\u56DE\u8C03\u53EA\u80FD\u8C03\u7528\u4E00\u6B21
  try {
    then.call(value, val =&gt; {
      if (!called) {
        called = true
        resolveValue(val, resolve, reject) // \u9700\u8981\u9012\u5F52resolve\uFF0C\u56E0\u4E3A\u53EF\u80FD\u591A\u6B21\u8FD4\u56DEthenable
      }
    }, reason =&gt; {
      if (!called) {
        called = true
        reject(reason) // reject\u5C31\u76F4\u63A5\u8C03\u7528\u5373\u53EF
      }
    })
  } catch (err) {
    called || reject(err)
  }
}

function Promise (callback) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Promise cannot be invoked without &quot;new&quot;.')
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Promise callback is not a function.')
  }
  [this._status, this._value] = ['pending']
  this._callbacks = { resolved: [], rejected: [] }
  const fulfill = (status, value) =&gt; {
    if (this._status === 'pending') { // \u72B6\u6001\u53EA\u80FD\u53D8\u66F4\u4E00\u6B21
      [this._status, this._value] = [status, value]
      this._callbacks[status].forEach(cb =&gt; cb(value))
    }
  }
  try {
    callback(value =&gt; {
      if (this === value) { // \u4E0D\u80FD\u8FD4\u56DE\u81EA\u8EAB
        fulfill('rejected', new TypeError('Can not resolve or return the current promise.'))
      } else {
        resolveValue(value, val =&gt; {
          fulfill('resolved', val)
        }, reason =&gt; {
          fulfill('rejected', reason)
        })
      }
    }, reason =&gt; {
      fulfill('rejected', reason) // reject \u76F4\u63A5\u8FD4\u56DE\u503C
    })
  } catch (err) {
    fulfill('rejected', err)
  }
}

Promise.prototype.then = function then(onResolve, onReject) {
  const promise = new Promise((resolve, reject) =&gt; {
    const handleCallback = (resolved) =&gt; {
      setTimeout(() =&gt; { // then\u7684\u56DE\u8C03\u9700\u8981\u5728\u65B0\u7684\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u6267\u884C
        const callback = resolved ? onResolve : onReject
        if (typeof callback !== 'function') {
          return (resolved ? resolve : reject)(this._value)
        }
        try {
          var val = callback(this._value)
        } catch (err) {
          return reject(err)
        }
        if (promise === val) { // \u8FD4\u56DE\u7684\u503C\u4E0D\u80FD\u662Fpromise\u672C\u8EAB(TypeError: Chaining cycle detected for promise)
          reject(new TypeError('Can not resolve or return the current promise.'))
        } else {
          resolveValue(val, resolve, reject)
        }
      })
    }
    if (this._status === 'pending') {
      this._callbacks.resolved.push(() =&gt; handleCallback(true))
      this._callbacks.rejected.push(() =&gt; handleCallback(false))
    } else {
      handleCallback(this._status === 'resolved')
    }
  })
  return promise
}

</code></pre>
<hr>
<p>\u4EE5\u4E0A\u662F\u5BF9<code>Promise</code>\u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u5B9E\u9645\u4E0APromise/A+\u89C4\u8303\u53EA\u8981\u6C42\u5B9E\u4F8B\u5BF9\u8C61\u5FC5\u987B\u8981\u6709then\u65B9\u6CD5\uFF0CES\u89C4\u8303\u4E2D\u8FD8\u89C4\u5B9A\u4E86\u4E00\u4E9B\u9759\u6001\u548C\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u4F9D\u8D56Promise\u6838\u5FC3\u6765\u5B9E\u73B0</p>
<ul>
<li><code>Promise.prototype.catch</code><pre><code class="language-javascript">Promise.prototype.catch = function (onReject) {
  return this.then(null, onReject)
}
</code></pre>
</li>
<li><code>Promise.prototype.finally</code><pre><code class="language-javascript">Promise.prototype.finally = function (callback) {
  return\xA0this.then(val =&gt;\xA0{
    return\xA0Promise.resolve(callback()).then(()\xA0=&gt; val)
  },\xA0err\xA0=&gt;\xA0{
    return\xA0Promise.resolve(callback()).then(()\xA0=&gt;\xA0{ throw\xA0err })
  })
}
</code></pre>
</li>
<li><code>Promise.resolve</code> &amp; <code>Promise.reject</code><pre><code class="language-javascript">Promise.resolve = function resolve (val) {
  return val instanceof Promise ? val : new Promise((resolve) =&gt; resolve(val))
}
Promise.reject = function reject (reason) {
  return new Promise((_, reject) =&gt; reject(reason))
}
</code></pre>
</li>
<li><code>Promise.all</code><pre><code class="language-javascript">Promise.all = function all (values) {
  return new Promise((resolve, reject) =&gt; {
    // \u5B9E\u9645\u4E0A\u8FD9\u91CC\u7684values\u53EA\u8981\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61\u5C31\u53EF\u4EE5\uFF0C\u8FD9\u91CC\u7B80\u5316\u4E86\u5224\u65AD\uFF0C\u5176\u4ED6\u65B9\u6CD5\u4E5F\u4E00\u6837
    if (!Array.isArray(values)) throw new TypeError('Promise.all only accepts iterable value.')
    const resolvedValues = [], len = values.length
    if (len === 0) return resolve(resolvedValues)
    for (let i = 0; i &lt; len; i++) {
      Promise.resolve(values[i]).then(val =&gt; {
        resolvedValues[i] = val
        if (i === len - 1) {
          resolve(resolvedValues)
        }
      }, err =&gt; {
        reject(err) // \u4E00\u65E6\u9519\u8FC7\u5C31\u4E0D\u518D
      })
    }
  })
}
</code></pre>
</li>
<li><code>Promise.allSettled</code><pre><code class="language-javascript">Promise.allSettled = function allSettled (values) {
  return new Promise((resolve) =&gt; {
    if (!Array.isArray(values)) throw new TypeError('Promise.allSettled only accepts iterable value.')
    const resolvedValues = [], len = values.length
    if (len === 0) return resolve(resolvedValues)
    for (let i = 0; i &lt; len; i++) {
      Promise.resolve(values[i]).then(val =&gt; {
        resolvedValues[i] = {
          status: 'fulfilled', value: val
        }
        if (i === len - 1) {
          resolve(resolvedValues)
        }
      }, err =&gt; {
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
</code></pre>
</li>
<li><code>Promise.race</code>\uFF0C\u8C01\u5148\u7ED3\u675F\u5C31\u8FD4\u56DE\u8C01<pre><code class="language-javascript">Promise.race = function race (values) {
  return new Promise((resolve, reject) =&gt; {
    if (!Array.isArray(values)) throw new TypeError('Promise.race only accepts iterable value.')
    for (let i = 0; i &lt; values.length; i++) {
      Promise.resolve(values[i]).then(resolve, reject)
    }
  })
}
</code></pre>
</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any"><code>Promise.any</code></a>\uFF0C\u548C<code>Promise.all</code>\u5728\u529F\u80FD\u4E0A\u662F\u76F8\u53CD\u7684\uFF0C\u4F1A\u5C1D\u8BD5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6210\u529F\u7684promise\uFF0C\u5982\u679C\u90FD\u5931\u8D25\u90A3\u5C31\u4EE5<code>AggregateError</code>\u6765reject<pre><code class="language-javascript">Promise.any = function any (values) {
  return new Promise((resolve, reject) =&gt; {
    if (!Array.isArray(values)) throw new TypeError('Promise.any only accepts iterable value.')
    const resolvedReasons = [], len = values.length
    if (len === 0) return reject(new AggregateError(resolvedReasons, 'All promises were rejected'))
    for (let i = 0; i &lt; len; i++) {
      Promise.resolve(values[i]).then(val =&gt; {
        resolve(val)
      }, err =&gt; {
        resolvedReasons[i] = err
        if (i === len - 1) {
          reject(new AggregateError(resolvedReasons, 'All promises were rejected'))
        }
      })
    }
  })
}
</code></pre>
</li>
</ul>
`;export{e as default};
