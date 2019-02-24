# next 项目搭建过程

## 项目搭建过程

1. 生成文件 .gitignore
2. npm init
3. sudo npm install --save next react react-dom
4. 新建 /pages/index.js

   ```js
   export default () => <div>Welcome to next.js!</div>;
   ```

5. npm run dev

   也可以运行 npm run dev -- -p <端口号>

6. 静态目录 static

## 构建和添加 less

<https://github.com/zeit/next-plugins/tree/master/packages/next-less>

```bash
sudo npm install --save @zeit/next-less less

```

创建文件
next.config.js

```js
const withLess = require("@zeit/next-less");
module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
});
```

## 设置头元素

## 静态文件服务

## 构建添加 ESlint

## 构建添加 TypeScript
