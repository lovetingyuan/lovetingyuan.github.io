[meta]: <nodejs> (title: 'Koa和express的中间件', keywords: 'middleware', date: '2020-8-22')

## Koa和Express的中间件机制

### Koa

```javascript
const createServer = (req, res) => {
  const ctx = createContext(req, res)
  ctx.res.statusCode = 404
  const fnMiddleware = compose(middlewares)
  return fnMiddleware(ctx)
    .then(() => finalRespond(ctx))
    .catch(err => ctx.onerror(err));
}
// 洋葱模型
function compose (middlewares) {
  return function (context, next) {
    let index = -1 // last called middleware #
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middlewares[i]
      // 当i等于中间件队列长度时表示最后一个中间件正在调用next
      if (i === middlewares.length) fn = next
      // 这里next是空的就直接resolve返回即可，之后就是从洋葱芯回到表皮的过程
      if (!fn) return Promise.resolve()
      try {
        // 这里可以看到，调用next方法其实就是调用下一个中间件
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

```

### Express

Express中间件其实和Koa类似，也是从上到下的执行流程，当调用`next`的时候，express会执行下一个中间件，如果没调用`next`并且也没有返回响应，那么express会挂起，前端就一直等待，而Koa则不同，不调用`next`只是不会调用剩余的中间件，但最终还是会返回响应；另外express的中间件是同步调用的，意味着如果中间件有异步操作，`next`也不会等待异步完成，而就只是线性的调用下一个中间件

```javascript
// 伪代码
function dispatch(req, res, done) {
  var idx = 0;
  var stack = this.stack;
  if (stack.length === 0) return done();
  next();
  function next(err) {
    var layer = stack[idx++]; // 因为express注册中间件途径多种多样，每个中间件都会被抽象成layer
    if (err === 'route' || err === 'router' || !layer) return done(err);
    if (err) {
      layer.handle_error(err, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
}

```

---------------

总结来讲，Koa和Express的中间件区别主要在于，express是依靠主动调用`res.end`来响应请求，koa则只是向ctx挂载数据，中间件执行完再返回响应；二者都是通过`next`来调用下一个中间件，区别在于express不会等待异步的中间件执行完，而koa会强制让你`await next()`才可以
