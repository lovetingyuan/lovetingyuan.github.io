## http2

> https://web.dev/articles/performance-http2?hl=zh-cn

http2 是 http1.1 之后的重大版本更新，它最初源于google于2009年发布的SPDY协议，后来HTTP工作组基于SPDY的思想开始起草HTTP/2协议，最终于2015年正式发布最新的http2协议标准

- 二进制分帧

  - http2 的请求和响应都是由一个或多个帧组成的
  - 帧有不同的类型，有 header 帧，data 帧以及其余 8 种控制帧
  - 每个帧都有一个 id，来标识自己属于哪个流，同一个请求和响应的帧组成了一条双向数据流

  ![](https://web.dev/static/articles/performance-http2/image/http2-streams-messages-e837d74e21e27.svg?hl=zh-cn)

- 多路复用

  - 不同的请求和响应可以在同一个 tcp 连接上按照随意的顺序发送和接收
  - 一个请求和其响应的帧组成一条数据流，一个 tcp 连接上可以有多条数据流乱序并行发送
  - 流是个逻辑概念，每个流有 id 标识，每个帧也都保存了所属的流 id，也就是拥有同样流 id 的帧组成了一条数据流
  - 虽然流可以乱序发送，但是流内的帧必须是有序的
  - 每个数据流都可以可选的指定一个优先级，并且还可以指定其依赖的流，这可以指示服务器让重要的请求获得优先的处理

  ![](https://web.dev/static/articles/performance-http2/image/http2-request-response-861628045d98b.svg?hl=zh-cn)

- 服务端推送

  http2 默认不开启这个特性，需要在服务端配置，一般只对新用户首次访问时启用。值得注意的是，在实际的浏览器中该特性已经被废弃。

- 首部压缩

  双方会维护一个首部表，用数字索引来代替常用的 header，另外用哈夫曼编码来压缩字符串

  首部表由规范定义好的静态表和需要运行时双方共同维护的动态表组成

  ![](https://web.dev/static/articles/performance-http2/image/hpack-header-compression-e6c0e0b7b99c6.svg?hl=zh-cn)
