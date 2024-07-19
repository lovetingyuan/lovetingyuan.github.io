## typescript

1. 实现高级类型 `PromiseType<T>`

   ```ts
   PromiseType<Promise<string>> // string
   PromiseType<Promise<Promise<number>>> // number
   ```

## html & css

1. 使用 css 和 html 实现一个简单的 tab 页切换效果，要求不能使用 js

   ```html
   <div class="tabs">
     <!-- 在此书写tab标签 -->
     <section>content 1</section>
     <section>content 2</section>
     <section>content 3</section>
   </div>
   <style>
     /* 在此书写样式 */
   </style>
   ```

2. 隐藏页面上的一个元素（不可见），有哪些方法？
   hidden display visibility opacity content-visibility 绝对定位 size=0 clip-path:polygon(0 0)
3. 实现一个小矩形逐渐变成大矩形的效果，有多少实现方式？
4. 了解 gpu 硬件加速吗 背后的原理和流程是什么
5. 在html中，我想展示一个图片，除了使用img标签之外还有哪些方式？(picture,css#(background,border-image,list-style-image,content...),input[type=image],image(svg),object,embed,canvas,iframe)

## javascript

1. 实现下面的语句

   ```js
   function foo() {
     console.log(this.val)
   }
   // 用不用的方式来调用foo，使控制台打印出字符串 foo
   // 例如：foo.call({ val: 'foo' })
   ```

2. 写出对应的输出

   ```js
   ;(async () => {
     const p = new Promise((r) => {
       console.log(1)
       Promise.resolve().then(() => {
         r()
         console.log(2)
       })
     })

     console.log(3)
     console.log(await 4)
     p.then(() => {
       console.log(5)
     }).then(() => {
       console.log(6)
     })
     p.then(() => {
       console.log(7)
     })
     setTimeout(() => {
       console.log(8)
     }, 9)
     setTimeout(() => {
       console.log(9)
     }, 8)
   })()
   ```

3. 实现`Promise.all`和`Promise.finally`

   ```js
   const obj = { a: 'one', b: 'two', a: 'three' }
   console.log(obj)
   // --------------
   async function getData() {
     return Promise.resolve('I made it!')
   }
   function getData2() {
     return Promise.resolve('I made it!')
   }
   console.log(getData()) // Promise {<pending>}
   console.log(getData2()) // Promise {<fulfilled>: 'I made it!'}

   async function* range(start, end) {
     for (let i = start; i <= end; i++) {
       yield Promise.resolve(i)
     }
   }

   ;(async () => {
     const gen = range(1, 3)
     for await (const item of gen) {
       console.log(item)
     }
   })()

   const name = 'Lydia Hallie'
   const age = 21

   console.log(Number.isNaN(name))
   console.log(Number.isNaN(age))

   console.log(isNaN(name))
   console.log(isNaN(age))

   const myPromise = Promise.resolve(Promise.resolve('Promise!'))

   function funcOne() {
     myPromise.then((res) => res).then((res) => console.log(11, res))
   }

   async function funcTwo() {
     const res = await myPromise
     console.log(22, res) //  console.log(22, await res)
   }
   funcOne()
   funcTwo()
   ```

   ```html
   <div onclick="console.log('div')">
     <p onclick="console.log('p')">Click here!</p>
   </div>
   ```

4. 实现以下功能，并说下这段代码有什么问题

   ```js
   '#foo'.html = '<b>foo</b>'
   console.assert(document.getElementById('foo').innerHTML === '#foo'.html)
   ```

5. 实现一个请求api的方法 `function myFetch(url, timeout, errorRetry)`，要求增加超时取消和请求失败重试的功能，注意超时也算请求失败

::: detail result

```js
function advancedRequest(url, timeout, errorRetry) {
  return new Promise((resolve, reject) => {
    let retryCount = 0

    function makeRequest() {
      const controller = new AbortController()
      const signal = controller.signal

      const timeoutId = setTimeout(() => {
        controller.abort()
        handleError(new Error('Request timed out'))
      }, timeout)

      fetch(url, { signal })
        .then((response) => response.json())
        .then((data) => {
          clearTimeout(timeoutId)
          // if (data.code === -1) {
          //   throw new Error('Request failed with code -1')
          // }
          resolve(data)
        })
        .catch(handleError)

      function handleError(error) {
        clearTimeout(timeoutId)
        if (retryCount < errorRetry) {
          retryCount++
          // console.log(`Retrying request (${retryCount}/${errorRetry})...`)
          makeRequest()
        } else {
          reject(error)
        }
      }
    }

    makeRequest()
  })
}
```

:::

## http

1. 当前网站 A 向第三方网站 C（可信但是不同域名）请求一个接口并且希望带上二者的 cookie，请问需要满足什么条件或者做什么设置？

   withCredential: true and same-site cookie

## vue

1. 请说出：去掉 one 与否的差异

   ```html
   <template>
     <p>
       <span ref="count">{{count}}</span>
       <button @click="handleAdd">add</button>
     </p>
   </template>
   <script>
     export default {
       data() {
         return { count: 0 }
       },
       methods: {
         handleAdd() {
           one: this.count++
           this.$nextTick(() => {
             console.log(1, this.count, this.$refs.count.textContent)
           })
           two: this.count++
           console.log(2, this.count, this.$refs.count.textContent)
           this.$nextTick(() => {
             console.log(3, this.count, this.$refs.count.textContent)
           })
           three: this.count++
           this.$nextTick(() => {
             console.log(4, this.count, this.$refs.count.textContent)
           })
         }
       }
     }
   </script>
   ```

## git

1. 如何合并多个 commit 为一个 commit

## 算法

1. 判断一个二叉树是否是另一个二叉树的**子结构** [leetcode](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

2. 使用递归和迭代两种方式反转一个链表 [leetcode](https://leetcode-cn.com/problems/reverse-linked-list/)
3. 有一个数组，从其中找到两个数的最大差值(要求这两个数递增)，返回对应的差值
4. 使用两种方法实现 N 叉树的层次遍历 [leetcode](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)

---

- https://hytonightyx.github.io/
- https://muyiy.cn/question/
- https://vue3js.cn/interview/
- https://github.com/CavsZhouyou/Front-End-Interview-Notebook
- https://github.com/pwstrick/daily
- https://blog.poetries.top/browser-working-principle/
