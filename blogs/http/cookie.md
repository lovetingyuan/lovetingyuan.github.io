## cookie

### 格式

Set-Cookie: username=jimu; Domain=jimu.com; Path=/blog; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Max-Age=347824; Secure; HttpOnly; SameSite=Lax; Partitioned

Domain 和 Path 标识定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

Domain 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前主机，不包含子域名。如果指定了Domain，则一般包含子域名。例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如`developer.mozilla.org`）。
Path则限制了cookie在有效域名下面可以生效的地址，例如Path=/docs，则以下地址都会匹配：

- /docs
- /docs/Web/
- /docs/Web/HTTP

Expires表示cookie失效的时间，Max-Age表示cookie的生效时长（优先级更高），如果不设置Expires或者Max-Age那么这个cookie就是会话cookie，只在页面生命周期内有效

Secure表示限制访问协议必须是https，否则不生效

HttpOnly表示限制cookie无法通过JavaScript获取

SameSite表示限制第三方cookie的发送，它可以有效防止用户追踪以及降低CSRF的风险。它有三个值Strict, Lax, None。同站设置的cookie就是第一方cookie，跨站设置的cookie就属于第三方cookie（是否跨站会根据协议和域名公共后缀是否相同来判断）。现在SameSite的默认值是Lax，表示在点击链接，预加载请求，GET 表单这三类请求时会发送三方cookie，其余情况不会发送；Strict是任何情况都不会发送；None则是会发送（需要启用Secure属性才有效）。

[Partitioned](https://developer.mozilla.org/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)表示分区cookie

### 限制

1. 设置cookie时，Domain只能指定为当前域名或者其父域名，否则cookie会被拒绝设置
2. 指定了Domain的cookie在其及其子域名下面都有效，例如 foo=a; Domain=example.com; foo在example.com及其子域名下都是生效的
