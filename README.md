# first-vue-app

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run serve
```

### Compiles and minifies for production

``` 
npm run build
```

### Run your tests

``` 
npm run test
```

### Lints and fixes files

``` 
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# VUE脚手架学习：结构认识

## 1、安装 vue/cli
### 1-1、node -v 确认node版本：v10.16.0以上
### 1-2、npm i -g @vue/cli
### 1-3、vue create 项目名称 、按回车键，再回车键 （从网络上面把库，依赖包之类的都下载下来）
### 1-4、文件结构：
#### 1-4-1、node_modules——依赖的第三方的包；
#### 1-4-2、README.md——项目说明文档；
#### 1-4-3、package.json——项目的一些配置：版本，命令，依赖，第三方的包，语法检查配置等（不能改动）；
#### 1-4-4、package-lock.json——记录使用的包；
#### 1-4-5、babel.config.js——告诉项目如何解析js文件，比如把ES6代码转换为ES5代码，帮助我们将浏览器不认识的语法转换为认识的；
#### 1-4-6、.gitignore——配置哪些文件是被忽略的，代码改动管理；
#### 1-4-7、public——里面的index.html是生成器的模板，通过这个模板去生成真正的html；
#### 1-4-8、src——源代码，主要在这里写代码，main.js是程序的主入口，assets存放图片文件，css文件等。


## 1、学习了canvas的一点基础， 画图，在线签名，保存图片；

## 2、学习原生JavaScript设计轮播图 slideshow；

### 数组-在计算机科学中的定义： 摘选自维基百科，地址：[数组的定义](https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84) 

在计算机科学中，数组数据结构（英语：array data structure），简称**数组（英语：Array）**，是由**相同类型的元素（element）**的**集合**所组成的数据结构，分配一块连续的内存来存储。利用元素的**索引（index）**可以计算出该元素对应的存储地址。

最简单的数据结构类型是**一维数组**。例如，索引为0到9的32位整数数组，可作为在存储器地址2000，2004，2008，...2036中，存储10个变量，因此索引为i的元素即在存储器中的2000+4×i地址。数组第一个元素的存储器地址称为第一地址或基础地址。

**二维数组**，对应于数学上的矩阵概念，可表示为二维矩形格。例如：{\displaystyle a={\begin{bmatrix}3&6&2\\0&1&-4\\2&-1&0\end{bmatrix}}}{\displaystyle a={\begin{bmatrix}3&6&2\\0&1&-4\\2&-1&0\end{bmatrix}}}在C语言中表示为int a[3][3] = {{3, 6, 2}, {0, 1, -4}, {2, -1, 0}}; 。

在某些情况下，“向量”一词也可能代表二维数组，虽然在数学意义上更确切地称呼为元组（tuple），而不是向量。但需要注意的是：计算机科学的某些领域，如Matlab，元组是指类似C语言struct类型，具有固定的往往是不同类型的数据成员的数据结构。

数组通常用于实现数据库的表格，特别是查询表；表格有时也被当作是数组的同义词。


数组是最早期和最重要的数据结构之一，很多程序都会用到数组。它们也用于实现许多其他数据结构，譬如列表（list）和字符串（string）。它们有成效地开展了计算机的定址逻辑。在大多数现代计算机和许多外部存储设备中，存储器如同一维数组，索引就是其地址。编译器、处理单元（特别是向量处理器），经常会针对数组操作进行优化。

因为在程序运行时可以计算元素的索引，数组是很有用的。此外，也能以单一迭代语句就处理数组的许多元素。为此，数组数据结构的元素必须具有相同的大小，而且应该使用相同的数据类型表示。

数组一词通常用于表示数组数据类型，一种大多数高端编程语言都会内置的数据类型。数组类型通常由数组结构来实现；然而在某些语言中，它们可以由散列表、链表、搜索树或其它数据结构来实现。

在算法的描述中，数组一词特别着重意义为关系数组或“抽象的数组”，一种理论上的计算机科学模型（抽象数据类型或 ADT），专注于数组的基本性质上。

## 3、第七课：事件冒泡；demo文件：src/basicJavaScript/DOM/06-javascript-event-popup.html

### 3-1、事件冒泡和默认行为的区别：

### 3-2、margin转移知识点：CSS样式中给父级盒子加“overflow:hidden”解决。

### 3-3、封装“document.getElementById”语句，还可以自定义一个.js文件再script标签引入进来
/** 当语句调用get的时候，实际上是调用了 function get，
         *  获取到了document.getElementById(id)对象，
         *  然后把对象返回回来。
         *  然后赋值给app 和 appInside 
         */
### 3-4、阻止事件冒泡：当A中包含B，且A和B都绑定了同样的事件，
    *  点击B的时候会触发A的事件，如果希望阻止A的事件，
    *  则可以使用 e.stopPropogation() 阻止
### 3-5、冒泡事件中的执行次数引申出的js的函数定义理解和事件监听的使用和理解：
#### 3-5-1、问题提出：如果同样的app.onclick()代码写多遍，是否会全部执行？
实验证明：只走了最后一个函数，为什么？app是对象，不管写多少遍，都只是方法的定义阶段，并没有真的调用了，当执行了才是真的调用了。
#### 3-5-2、事件监听能提供执行两个的方案，
app.addEventListener('click',function(){
    console.log('123')
});

### 第八课：原生Ajax
#### readyState的含义：demo文件：src/basicJavaScript/DOM/07-javascript-ajax-origin.html
            0：(未初始化) 还没调用send()方法-正在发送请求；
            1：(载入) 已调用send()方法；
            2：(载入完成) send()执行完毕-已接收全部响应内容；
            3：(交互) 正在解析响应内容；
            4:(完成) 响应内容解析完成，可以在客户端调用；

