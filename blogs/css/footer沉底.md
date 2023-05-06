### 方法一：将 footer 绝对定位到底部

```html
<div class="wrapper">
  <div class="content"><!-- 页面主体内容区域 --></div>
  <div class="footer"><!-- 需要做到 Sticky Footer 效果的页脚 --></div>
</div>

<style>
  html,
  body {
    height: 100%;
  }
  .wrapper {
    position: relative;
    min-height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  .footer {
    position: absolute;
    bottom: 0;
    height: 50px;
  }
</style>
```

### 方法二：为 footer 设置负 margin-top

```html
<div class="content"></div>
<footer class="footer"></footer>

<style>
  html,
  body {
    height: 100%;
  }
  .content {
    min-height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
  }

  .footer {
    height: 50px;
    /* 下面的margin-top也可以转为对.content 设置 margin-bottom: -50px; */
    margin-top: -50px;
  }
</style>
```
