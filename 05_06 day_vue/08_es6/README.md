npm install babel-core babel-loader@7.1.5 babel-preset-env babel-plugin-transform-runtime -D  

babel-loader 8以上版本有编译问题  

babel-core  把 Javascript 语法 分为 syntax 和 api,没有转换全局对象

babel-loader  将es6的代码transfrom进行转义

babel-preset-env  babel官方做的预设插件集，成为preset

babel-plugin-transform-runtime  Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。

babel-polyfill 使用场景

