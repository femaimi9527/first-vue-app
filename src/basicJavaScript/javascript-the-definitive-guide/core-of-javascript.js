/* eslint-disable no-unused-vars */
// 所有在双斜线之后的内容都属于注释
// 仔细阅读这里的注释：他们对JavaScript代码做了解释

// 变量是表示值的一个符号名字
// 变量是通过var关键字声明的
var x;                              //1、声明一个变量x

// 值可以通过等号赋值给变量
x = 0;                              //2、现在变量x的值为0
x                                   //=> 0：3、通过变量获取其值

// JavaScript支持多种数据类型
x = 1;                              //4、数字
x = 0.01;                           //5、整数和实数共用一种数据类型
x = "hello world";                  //6、由双引号内的文本构成的字符串
x = 'JavaScript';                   //7、单引号内的文本同样构成字符串
x = true;                           //8、布尔值
x = false;                          //9、另一个布尔值
x = null;                           //10、null是一个特殊的值，意思是“空”
x = undefined;                      //11、undefined和null非常相似

/**
 * JavaScript中两个非常重要的数据类型是对象和数组。
 * 第6章介绍对象，第7章介绍数组，
 * 对象和数组在JavaScript中是如此之重要，以至于你在本书中处处都能看到它们的身影。
 *  */

//JavaScript中的最重要的类型就是对象
//对象是名/值对的集合，或字符串到值映射的集合
var book = {                        //对象是由花括号括起来的
    topic: "JavaScript",            //属性"topic"的值是"JavaScript"
    fat: true                       //属性"fat"的值是true
};                                  //右花括号标记了对象的结束
//通过"."或"[]"来访问对象属性
book.topic                          //=> "JavaScript"
book["fat"]                         //=> true:另外一种获取属性的方式
book.author = "Flanagan";           //通过赋值创建一个新属性
book.contents = {};                 //{}是一个空对象，它没有属性
//JavaScript同样支持数组（以数字为索引的列表）
var primes = [2, 3, 5, 7];          //拥有4个值的数组，由"["和"]"划定边界
primes[0]                           //=> 2:数组中的第一个元素（索引为0）
primes.length                       //=> 4:数组中的元素个数
primes[primes.length - 1]           //=> 7:数组的最后一个元素
primes[4] = 9;                      //通过赋值来添加新元素
primes[4] = 11;                     //或通过赋值来改变已有的元素
var empty = [];                     //[]是空数组，它具有0个元素
empty.length                        //=> 0
//数组和对象中都可以包含另一个数组或对象:
var points = [                      //具有两个元素的数组
    { x: 0, y: 0 },                 //每个元素都是一个对象
    { x: 1, y: 1 }
];
var data = {                        //一个包含两个属性的对象
    trial1: [[1, 2], [3, 4]],       //每一个属性都是数组
    trial2: [[2, 3], [4, 5]]        //数组的元素也是数组
};