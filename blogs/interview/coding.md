## coding

1. 并发请求限制

::: detail result

```js
function concurrentRequests(urls, limit) {
  return new Promise((resolve, reject) => {
    const results = new Array(urls.length)
    let completedCount = 0
    let index = 0

    function processNext() {
      if (index >= urls.length) return

      const currentIndex = index++
      window
        .fetch(urls[currentIndex])
        .then((response) => response.json())
        .then((data) => {
          results[currentIndex] = data
        })
        .catch((error) => {
          results[currentIndex] = { error: error.message }
        })
        .finally(() => {
          completedCount++
          if (completedCount === urls.length) {
            resolve(results)
          } else {
            processNext()
          }
        })
    }

    // 启动初始的请求
    for (let i = 0; i < Math.min(limit, urls.length); i++) {
      processNext()
    }
  })
}
```

:::
