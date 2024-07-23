### include and references

> https://kettanaito.com/blog/one-thing-nobody-explained-to-you-about-typescript

tsconfig.json 中的 `include` 和 `references`

- include 表示当前的tsconfig.json会对哪些文件生效
- references 表示当前的tsconfig.json需要额外关注的其余配置

举个例子：

假设项目中存在tests目录存放单元测试，tsconfig.test.json 中 include 配置为 './tests'，
src目录则存放源码，tsconfig.src.json 中 include 配置为 './src',
这没问题，但是通常测试文件需要import源码的模块，此时就需要在 tsconfig.test.json 的 references中添加tsconfig.src.json，这样可以在typescript检查测试代码的时候告诉typescript也去检查src中相关的模块
