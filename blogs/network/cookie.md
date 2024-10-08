## cookie

> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies

### 格式和属性

Set-Cookie: username=jimu; Domain=jimu.com; Path=/blog; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Max-Age=347824; Secure; HttpOnly; SameSite=Lax; Partitioned

首先是`cookie名称=cookie值`，跟后面的属性用分号隔开，名称和值是任意的，如果省略了名称或者值那会被当作值，名称则为空字符。浏览器还为cookie名称特别设置了两个前缀：

- `__Host-` 前缀的cookie，必须满足以下条件：
  1. 必须带有`Secure`属性，并且只能用于 https 连接（也就是保证了cookie传输也是安全可信的）
  2. 不能包含`Domain`属性（也就是只对当前域名生效，不会对子域名或父域名造成影响）
  3. Path属性必须为'/'
- `__Secure-` 前缀则稍微弱化一些，需要满足上面的第一个条件

如果cookie名称携带了这两个前缀但是又不满足这些条件，浏览器会拒绝写入。cookie前缀对cookie的设置提供了一个限制的机制，这有利于cookie的安全。

---

Domain 和 Path 标识定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

- Domain 标识指定了哪些主机可以接受 Cookie。
  如果不指定，默认为当前主机，不包含子域名。如果指定了Domain，则只能指定当前域名或其父域名，此时其子域名也通常会生效。例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中，如`developer.mozilla.org`（这里的父子域名同样遵循跨站的定义）。如果域名不符合上述要求，则会默认设置失败。另外cookie的作用域不受端口的影响。

  对于拥有多个子域名的系统来说，某个子域名设置的cookie是有可能影响到其他子域名的，这有可能会带来冲突和不安全的影响。

- Path则限制了cookie在有效域名下面可以生效的地址，例如Path=/docs，则以下地址都会匹配：

  - /docs
  - /docs/Web/
  - /docs/Web/HTTP

  虽然不同的path可以设置不同的cookie，但是只要域名相同，不同path之间的页面的cookie都是可以互相访问到的。

---

Expires表示cookie失效的时间，Max-Age表示cookie的生效时长（优先级更高），如果不设置Expires或者Max-Age那么这个cookie就是会话cookie，只在页面生命周期内有效

Secure表示限制访问协议必须是https，否则不生效

HttpOnly表示限制cookie无法通过客户端JavaScript获取（但是它无法保证服务端不会以意外的方式泄露cookie至前端，例如一些服务端程序将原始错误日志或信息吐给前端等）

---

SameSite表示限制第三方cookie的发送，它可以有效防止用户追踪以及降低CSRF的风险。它有三个值Strict, Lax, None。同站设置的cookie就是第一方cookie，跨站设置的cookie就属于第三方cookie（是否跨站会根据协议和域名公共后缀PSL是否相同来判断）。现在SameSite的默认值是Lax，表示在点击链接，预加载请求，GET 表单这三类请求时会发送三方cookie，其余情况不会发送；Strict是任何情况都不会发送，比如你已经在A站点登录，然后在B站点导航到A站点就仍然是未登录；None则是会发送（需要启用Secure属性才有效）。除了影响发送，SameSite也会影响cookie的写入，例如不论使用JavaScript还是set-cookie，作为第三方站点时都无法写入Lax（不指定时就是Lax）和Strict的cookie。

[Partitioned](https://developer.mozilla.org/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)表示分区cookie，主要用来防止在无法完全禁用三方cookie的情况下三方的跨站点跟踪。例如站点A和B都嵌入了三方站点T，用户访问A和B时，T都可以收到在A时和B时设置的cookie，但是如果使用了分区cookie，访问B时T只能收到其在B时设置的cookie，无法获知用户访问过A，反之亦然。

### 操纵

除了使用http协议之外，在网页通常可以通过`document.cookie`来设置cookie，例如：
`document.cookie = "url=http://a.b.com/; expires=Sun, 31 Dec 2017 12:00:00 UTC;";`
这样会新增或者覆盖名为url的cookie（但不会影响其他的cookie）。

为了更方便的操作cookie，可以使用第三方库或者利用新的[`CookieStore`](https://developer.mozilla.org/zh-CN/docs/Web/API/CookieStore) Api.

另外值得注意的是设置cookie的时候一定要注意数据的来源，否则容易造成被注入
