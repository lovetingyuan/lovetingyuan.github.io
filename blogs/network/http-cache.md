## http 缓存

### 强缓存

[`cache-control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

在请求中：

- Cache-Control: `max-age=<seconds>`
- Cache-Control: `max-stale[=<seconds>]` (表示客户端愿意接受一个已经过期指定时间内的响应，它可以指定一个以秒为单位的值，表示客户端愿意接受的最大过期时间。如果没有指定秒数，则表示客户端愿意接受任何时间的过期响应。)
- Cache-Control: `min-fresh=<seconds>` 指定响应必须在指定时间内保持有效
- Cache-control: `no-cache`
- Cache-control: `no-store`
- Cache-control: `no-transform`
- Cache-control: `only-if-cached`

在响应中:

- Cache-control: `must-revalidate`
  本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。
- Cache-control: `no-cache`
  不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验。相当于`max-age=0, must-revalidate`
- Cache-control: `no-store`
- Cache-control: `no-transform`
- Cache-control: `public`
- Cache-control: `private`
- Cache-control: `proxy-revalidate`
- Cache-Control: `max-age=<seconds>`
- Cache-control: `s-maxage=<seconds>`

非标准属性：

- Cache-control: `immutable` 表示响应内容不会改变，在有效期内无需重新验证
- Cache-control: `stale-while-revalidate=<seconds>`
- Cache-control: `stale-if-error=<seconds>`

### 协商缓存

- `Last-Modified` / `If-Modified-Since`

  响应中携带 `Last-Modified`，表示资源最后修改的时间，请求时将这个时间再通过 `If-Modified-Since` 发送出去

- `ETag` / `If-None-Match` (优先级更高)

  响应中携带 `ETag`，表示资源最后修改的时间，请求时将这个时间再通过 `If-None-Match` 发送出去

如果服务器判断资源没有修改，那么会返回 304 的状态响应码
