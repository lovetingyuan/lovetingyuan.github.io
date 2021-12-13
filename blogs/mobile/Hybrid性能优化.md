[meta]: <mobile> (title: 'Hybrid性能优化', keywords: 'hybrid, performance, optimization', date: '2020-8-22')

## Hybrid性能优化

* 离线包缓存 + bsdiff/bspatch增量更新（完整性校验）

* 首屏直出（可以直出到离线包中，但要跟用户ID）

* 预加载，包括Webview预加载和复用，接口或资源可通过native预加载等

* 客户端渲染，可以借助webview将渲染好的html缓存起来，下次可以直接展示
