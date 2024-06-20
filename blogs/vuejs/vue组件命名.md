### vue组件命名

Vue官方推荐的给组件命名的方式是 `PascalCase`，原因可以参考[这里](https://vuejs.org/guide/components/registration.html#component-name-casing)

1. 组件文件名使用 `PascalCase` 命名
2. 组件 name选项（包括组件变量名）使用 `PascalCase`
3. 组件 import 以及注册（全局或局部）使用 `PascalCase`
4. 在模板或者jsx中使用组件也用 `PascalCase`

#### eslint

Vue的eslint插件通过配置以下规则可以让组件名称样式统一

```js
{
  "rules": [
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['iconify-icon'] // eg.
      }
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue', 'jsx', 'tsx'],
        shouldMatchCase: true
      }
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase']
  ]
}
```
