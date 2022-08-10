const e=`<h2>Koa\u548CExpress\u7684\u4E2D\u95F4\u4EF6\u673A\u5236</h2>
<h3>Koa</h3>
<pre><code class="language-javascript">const createServer = (req, res) =&gt; {
  const ctx = createContext(req, res)
  ctx.res.statusCode = 404
  const fnMiddleware = compose(middlewares)
  return fnMiddleware(ctx)
    .then(() =&gt; finalRespond(ctx))
    .catch(err =&gt; ctx.onerror(err));
}
// \u6D0B\u8471\u6A21\u578B
function compose (middlewares) {
  return function (context, next) {
    let index = -1 // last called middleware #
    return dispatch(0)
    function dispatch (i) {
      if (i &lt;= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middlewares[i]
      // \u5F53i\u7B49\u4E8E\u4E2D\u95F4\u4EF6\u961F\u5217\u957F\u5EA6\u65F6\u8868\u793A\u6700\u540E\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u6B63\u5728\u8C03\u7528next
      if (i === middlewares.length) fn = next
      // \u8FD9\u91CCnext\u662F\u7A7A\u7684\u5C31\u76F4\u63A5resolve\u8FD4\u56DE\u5373\u53EF\uFF0C\u4E4B\u540E\u5C31\u662F\u4ECE\u6D0B\u8471\u82AF\u56DE\u5230\u8868\u76AE\u7684\u8FC7\u7A0B
      if (!fn) return Promise.resolve()
      try {
        // \u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\uFF0C\u8C03\u7528next\u65B9\u6CD5\u5176\u5B9E\u5C31\u662F\u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

</code></pre>
<h3>Express</h3>
<p>Express\u4E2D\u95F4\u4EF6\u5176\u5B9E\u548CKoa\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u4ECE\u4E0A\u5230\u4E0B\u7684\u6267\u884C\u6D41\u7A0B\uFF0C\u5F53\u8C03\u7528<code>next</code>\u7684\u65F6\u5019\uFF0Cexpress\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u5982\u679C\u6CA1\u8C03\u7528<code>next</code>\u5E76\u4E14\u4E5F\u6CA1\u6709\u8FD4\u56DE\u54CD\u5E94\uFF0C\u90A3\u4E48express\u4F1A\u6302\u8D77\uFF0C\u524D\u7AEF\u5C31\u4E00\u76F4\u7B49\u5F85\uFF0C\u800CKoa\u5219\u4E0D\u540C\uFF0C\u4E0D\u8C03\u7528<code>next</code>\u53EA\u662F\u4E0D\u4F1A\u8C03\u7528\u5269\u4F59\u7684\u4E2D\u95F4\u4EF6\uFF0C\u4F46\u6700\u7EC8\u8FD8\u662F\u4F1A\u8FD4\u56DE\u54CD\u5E94\uFF1B\u53E6\u5916express\u7684\u4E2D\u95F4\u4EF6\u662F\u540C\u6B65\u8C03\u7528\u7684\uFF0C\u610F\u5473\u7740\u5982\u679C\u4E2D\u95F4\u4EF6\u6709\u5F02\u6B65\u64CD\u4F5C\uFF0C<code>next</code>\u4E5F\u4E0D\u4F1A\u7B49\u5F85\u5F02\u6B65\u5B8C\u6210\uFF0C\u800C\u5C31\u53EA\u662F\u7EBF\u6027\u7684\u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</p>
<pre><code class="language-javascript">// \u4F2A\u4EE3\u7801
function dispatch(req, res, done) {
  var idx = 0;
  var stack = this.stack;
  if (stack.length === 0) return done();
  next();
  function next(err) {
    var layer = stack[idx++]; // \u56E0\u4E3Aexpress\u6CE8\u518C\u4E2D\u95F4\u4EF6\u9014\u5F84\u591A\u79CD\u591A\u6837\uFF0C\u6BCF\u4E2A\u4E2D\u95F4\u4EF6\u90FD\u4F1A\u88AB\u62BD\u8C61\u6210layer
    if (err === 'route' || err === 'router' || !layer) return done(err);
    if (err) {
      layer.handle_error(err, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
}

</code></pre>
<hr>
<p>\u603B\u7ED3\u6765\u8BB2\uFF0CKoa\u548CExpress\u7684\u4E2D\u95F4\u4EF6\u533A\u522B\u4E3B\u8981\u5728\u4E8E\uFF0Cexpress\u662F\u4F9D\u9760\u4E3B\u52A8\u8C03\u7528<code>res.end</code>\u6765\u54CD\u5E94\u8BF7\u6C42\uFF0Ckoa\u5219\u53EA\u662F\u5411ctx\u6302\u8F7D\u6570\u636E\uFF0C\u4E2D\u95F4\u4EF6\u6267\u884C\u5B8C\u518D\u8FD4\u56DE\u54CD\u5E94\uFF1B\u4E8C\u8005\u90FD\u662F\u901A\u8FC7<code>next</code>\u6765\u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u533A\u522B\u5728\u4E8Eexpress\u4E0D\u4F1A\u7B49\u5F85\u5F02\u6B65\u7684\u4E2D\u95F4\u4EF6\u6267\u884C\u5B8C\uFF0C\u800Ckoa\u4F1A\u5F3A\u5236\u8BA9\u4F60<code>await next()</code>\u624D\u53EF\u4EE5</p>
`;export{e as default};
