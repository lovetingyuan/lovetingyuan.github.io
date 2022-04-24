## typescript

1. 实现高级类型 PromiseType<T>

   ```ts
   PromiseType<Promise<string>> // string
   PromiseType<Promise<Promise<number>>> // number
   ```

## html

1. 使用 css 和 html 实现一个简单的 tab 页切换效果，要求不能使用 js

   `label id for radio input :checked +`

## css

## javascript

1. 实现下面的语句

   ```js
   function foo() {
     return this.val
   }
   // 在此写任何语句，使得下面的语句可以打印出字符串 foo，有几种方式来实现？
   console.log(foo())
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
   })()
   ```

3. 如何取消一个 fetch 请求？

   使用[`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

## http

1. 当前网站 A 向第三方网站 C（可信但是不同域名）请求一个接口并且希望带上二者的 cookie，请问需要满足什么条件或者做什么设置？

   withCredential: true and same-site cookie
