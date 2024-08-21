## coding

1. 并发请求限制

::: detail result

```js
function concurrentRequests(urls, limit) {
  return new Promise((resolve, reject) => {
    const results = Array(urls.length).fill()
    let completedCount = 0
    let index = 0
    let fetchingCount = 0

    function processNext() {
      if (index >= urls.length || fetchingCount >= limit) {
        return
      }
      const currentIndex = index++
      fetchingCount++
      window
        .fetch(urls[currentIndex])
        .then((response) => response.json())
        .then((data) => {
          results[currentIndex] = data
        })
        .catch((error) => {
          results[currentIndex] = { error }
        })
        .finally(() => {
          completedCount++
          fetchingCount--
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

2. 拍平一个数组

::: detail result

```js
function flatArray(array, depth = 1) {
  const stack = [[array, depth]]
  const result = []

  while (stack.length > 0) {
    const [arr, currentDepth] = stack.pop()
    // mind currentDepth equal 0
    if (Array.isArray(arr) && currentDepth >= 0) {
      for (let i = arr.length - 1; i >= 0; i--) {
        stack.push([arr[i], currentDepth - 1])
      }
    } else {
      result.push(arr)
    }
  }

  return result
}
```

:::

3. [最长有效括号的长度](https://leetcode.cn/problems/longest-valid-parentheses/description/)

给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

::: detail result

```js
var longestValidParentheses = function (s) {
  const stack = [-1] // 存储当前有效括号上一个位置的下标
  let i = 0
  let maxLen = 0
  while (i < s.length) {
    // 遇到合法的括号就弹出，同时计算最长长度
    if (s[i] === ')' && s[stack.at(-1)] === '(') {
      stack.pop()
      // 此时stack最顶部的位置表示该位置之后都是合法的
      maxLen = Math.max(maxLen, i - stack.at(-1))
    } else {
      stack.push(i)
    }
    i++
  }
  return maxLen
}
```

:::

4. 将一维数组转换为树形结构的数据

::: detail result

```js
function arrayToTree(data) {
  const idMap = new Map()
  const root = []

  // 创建 id 到节点的映射
  for (const item of data) {
    idMap.set(item.id, { ...item, children: [] })
  }

  // 构建树形结构
  for (const item of data) {
    const node = idMap.get(item.id)
    if (item.parentId === '') {
      root.push(node)
    } else {
      const parent = idMap.get(item.parentId)
      parent.children.push(node)
    }
  }

  return root
}
```

:::
