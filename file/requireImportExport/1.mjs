// const fs = require('fs');
import fs from 'fs';
// const testExport = require('./testExport.mjs');
import testExport from './testExport.mjs' // testExport。mjs里是export defauult a;如果采用这种方式，首先import得置顶，其次当前1.js文件改成1.mjs。
console.log('导出', testExport)
function getAllFiles(dirName) {
    fs.readdirSync(dirName).map(e => {
        const curPaths = `${dirName}/${e}/`;
        console.log('当前', e, fs.lstatSync(curPaths).isDirectory())
        if (fs.lstatSync(curPaths).isDirectory()) {
            console.log('接下来读取', curPaths)
            getAllFiles(curPaths)
        }
    })
}
getAllFiles('.')

// const path = require('path')
// console.log(fs)

// const getFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         resolve(fs.readFileSync(fileName, {encoding: 'utf8'}))
//         // resolve(fs.readFileSync(fileName, 'utf8'))
//     })
// }

// getFile('test.猫猫')
//     .then(data => console.log('getFile then',data))
//     .catch(err => console.error('getFile err',err))


// fs.open('1.json', 'r+', (err, data) => { console.log('then open:', data); console.log('err open:',err) })   // 3
// fs.open('new1.txt', 'w+', (err, data) => { console.log('then open:', data); console.log('err open:',err) })   // 3


// fs.stat('1.json', (err, stats) => {
//     console.log('文件详细信息:', err, stats)
//     stats.isFile() //true
//     stats.isDirectory() //false
//     stats.isSymbolicLink() //false
//     stats.size //1024000 //= 1MB
//     //可以访问 `stats` 中的文件属性
// })



// console.log('path--',path.resolve('1.json'))
// console.log('path--',path.dirname('1.json'))
// console.log('path--',path.dirname('newFile/qq/qq.json'))



// fs.writeFile('test.猫猫', '呀呀呀', result => {
//     console.log('结果', result);
// })
// fs.appendFile('test.猫猫', '\n喜喜', result => {
//     console.log('结果', result);
// })

// if (!fs.existsSync('newFile')) {
//     console.log('创建')
//     fs.mkdirSync('newFile');
// }



// const files = fs.readdirSync('../file').map(e => {
//     console.log('当前', e, fs.lstatSync(e).isDirectory())    
// })





// console.log('__dirname', __dirname)
// console.log('process', process)
// console.log('module', module)

// 失败了
// const webpack = require('webpack');
// let config = require('/webpack.config.js');
// let compiler = webpack(config)
// new webpack.ProgressPlugin().apply(compiler);
// compiler.run(function (err, stats) {
//     console.log('run---', err, stats)
// });
// console.log(config, compiler,'config--')


// var origin = `<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"videos": []}}}</script>`
// console.log(origin.match(/[^(<script id=\"__NEXT_DATA__\" type=\"application\/json\">)(<\/script>)]/))   
// console.log(`<script>{"props":{"pageProps":{"videos": []}}}</script>`.match(/[^script]/))

// var patt1 = /[^(\<script\>)]+\<\/script\>$/;
// var patt1 = /\>\b.+\<\/script\>$/;

// \b是单词边界 .是非换行符以外得部分
// var str = "goYgle Runoob taobao";
// var patt1 = /\b\w/g;
// console.log(str.match(patt1));
// console.log(str.replace(patt1, v => v.toUpperCase()));




// function formatDate(dateString, format = 'YYYY-MM-DD HH:mm:ss') {
//     const map = new Map();
//     const date = new Date(dateString);
//     map.set('Y', date.getFullYear())
//         .set('M', date.getMonth() + 1)
//         .set('D', date.getDate())
//         .set('H', date.getHours())
//         .set('m', date.getMinutes())
//         .set('s', date.getSeconds())
//     return format.replace(
//         new RegExp('(' + [...Array.from(map.keys())].join('+|') + '+)', 'g'),
//         (v, _w, x, y) => String(map.get(y[x])).padStart(v.length, '0')
//     )
// }

// function formatDate(dateString, format = 'YYYY-MM-DD HH:mm:ss') {
//     const map = new Map();
//     const date = new Date(dateString);
//     map.set('Y', date.getFullYear())
//         .set('M', date.getMonth() + 1)
//         .set('D', date.getDate())
//         .set('H', date.getHours())
//         .set('m', date.getMinutes())
//         .set('s', date.getSeconds())
//     return format.replace(/`'(' + [...Array.from(map.keys())].join('+|') + '+)'`/g,
//         (v, _w, x, y) => String(map.get(y[x])).padStart(v.length, '0')
//     )
// }