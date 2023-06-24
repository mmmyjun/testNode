const fs = require('fs');
const path = require('path');
const baseUrl = 'es6.ruanyifeng.com';
const https = require('https')

const folderPath = path.resolve('.');
const downFolder = 'download'
const pathWidthDownload = folderPath + '\\' + downFolder;
if (!fs.existsSync(pathWidthDownload)) {
    fs.mkdirSync(downFolder)
}

const getData = (path) => {
    console.log('获取中path', `/${path}\.md`)
    const req = https.request({
        hostname: baseUrl,
        path: `/${path}\.md`,
        method: 'get'
    }, res => {
        console.log(`状态码: ${res.statusCode}`)
        res.on('data', d => {
            // process.stdout.write(d)
            const reg = String(d).match(/(?<=1.*]\(\#).+(?=\))/g);
            // console.log('输出结果', reg, String(d));
            let suffixFileName = reg ? path : path.match(/(?<=\/)\b.*/g);

            if (reg) {               
                reg.map(f => {
                    getData(f)
                })
            }
            fs.writeFileSync(pathWidthDownload + '\\' + suffixFileName + '.md', String(d), (e) => {
                console.log('错误', e)
            })
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
}
getData('sidebar')
// const folderPath = path.resolve('.');
// console.log(folderPath)
// fs.readdirSync(folderPath).map(fileName => {
//     // return path.join(folderPath, fileName)
//     console.log('档期路径下文件', fileName)
// })



// const reg = `# [ECMAScript 6 入门]()

// 作者：[阮一峰](https://www.ruanyifeng.com)

// 授权：<a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">署名-非商用许可证</a>

// ## 目录
// 1. [前言](#README)
// 1. [ECMAScript 6简介](#docs/intro)
// 1. [let 和 const 命令](#docs/let)
// 1. [变量的解构赋值](#docs/destructuring)
// 1. [字符串的扩展](#docs/string)
// 1. [字符串的新增方法](#docs/string-methods)
// 1. [正则的扩展](#docs/regex)
// 1. [数值的扩展](#docs/number)
// 1. [函数的扩展](#docs/function)
// 1. [数组的扩展](#docs/array)
// 1. [对象的扩展](#docs/object)
// 1. [对象的新增方法](#docs/object-methods)
// 1. [运算符的扩展](#docs/operator)
// 1. [Symbol](#docs/symbol)
// 1. [Set 和 Map 数据结构](#docs/set-map)
// 1. [Proxy](#docs/proxy)
// 1. [Reflect](#docs/reflect)
// 1. [Promise 对象](#docs/promise)
// 1. [Iterator 和 for...of 循环](#docs/iterator)
// 1. [Generator 函数的语法](#docs/generator)
// 1. [Generator 函数的异步应用](#docs/generator-async)
// 1. [async 函数](#docs/async)
// 1. [Class 的基本语法](#docs/class)
// 1. [Class 的继承](#docs/class-extends)
// 1. [Module 的语法](#docs/module)
// 1. [Module 的加载实现](#docs/module-loader)
// 1. [编程风格](#docs/style)
// 1. [读懂规格](#docs/spec)
// 1. [异步遍历器](#docs/async-iterator)
// 1. [ArrayBuffer](#docs/arraybuffer)
// 1. [最新提案](#docs/proposals)
// 1. [Decorator](#docs/decorator)
// 1. [参考链接](#docs/reference)

// ## 其他
// - [源码](https://github.com/ruanyf/es6tutorial/)
// - [修订历史](https://github.com/ruanyf/es6tutorial/commits/gh-pages)
// - [反馈意见](https://github.com/ruanyf/es6tutorial/issues)`.match(/(?<=1.*]\().+(?=\))/g)

 
// console.log(reg, 'reg')
// if (reg) {
//     reg.map(f => )
// }