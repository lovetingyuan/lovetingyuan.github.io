## http 缓存

### 强缓存

[`cache-control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
在请求中：

- Cache-Control: max-age=<seconds>
- Cache-Control: max-stale[=<seconds>]
- Cache-Control: min-fresh=<seconds>
- Cache-control: no-cache
- Cache-control: no-store
- Cache-control: no-transform
- Cache-control: only-if-cached

在响应中:

- Cache-control: must-revalidate
  本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。
- Cache-control: no-cache
  不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验。相当于`max-age=0, must-revalidate`
- Cache-control: no-store
- Cache-control: no-transform
- Cache-control: public
- Cache-control: private
- Cache-control: proxy-revalidate
- Cache-Control: max-age=<seconds>
- Cache-control: s-maxage=<seconds>

非标准属性：

- Cache-control: immutable
- Cache-control: stale-while-revalidate=<seconds>
- Cache-control: stale-if-error=<seconds>
