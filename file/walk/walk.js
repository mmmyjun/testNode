const fs = require('fs');
const path = require('path');
const dirPath = path.resolve('.'); // 需查找目录路径，使用当前地址
const ext = 'vue' // 查找文件类型
// https://juejin.cn/post/7248440913654169659

/**
 * readdir，广度优先
 * readdirSync，深度优先
 * readdirSync（withFileTypes: true）将文件作为fs.Dirent对象返回
 * fs模块共有5个类，分别是fs.Dirent（指示文件类型）、fs.FSWatcher（监视文件）、fs.ReadStream（读取流）、fs.WriteStream（写入流）和fs.Stats（文件的信息）。
 */
function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(file) {
    const filePath = path.join(currentDirPath, file.name);
    if (file.isFile()) {
      // 如果是文件
      if (path.extname(filePath) === `.${ext}`) {
        callback(filePath);
      }
    } else if (file.isDirectory()) {
      // 如果是文件夹，回调
      walkSync(filePath, callback);
    }
  });
}

// 存储所有vue文件路径
const allFilePath = []
walkSync(dirPath, function(vuePath) {
  allFilePath.push(vuePath)
});

console.log(`共查找到${allFilePath.length}个${ext}文件`)







/**
 * 正则表达式含有一个不可枚举的 lastIndex 属性：
 * 如果正则表达式加入了 /g 则每次需要重置lastIndex；如果没有 /g 则lastIndex就一直是0，不会变；
 * 
 * @returns 
 * String.prototype.match() ['eid="close_V5PPAQAD"']
 * RegExp.prototype.exec() ['close_V5PPAQAD']
 */
const findReg = /eid="([^"]+)"/g;
function getEids(str) {
  // 注释代码是为了精确获取id并实验 lastIndex
  // const ids = [];
  // let reg = findReg;
  // let match;
  // while ((match = reg.exec(str)) !== null) {
  //   str = str.replace(match[0], '');
  //   ids.push(match[1]);
  //   // 循环替换时，需要手动重置一次 lastIndex ，否则只能循环一次；
  //   reg.lastIndex = 0;
  // }
  // return ids

  return str && (str.match(findReg) || []);
}







const Eids = {}
const repeatIds = []
function readFile() {
  allFilePath.forEach((vuePath)=>{
    // 同步读取文件内容
    const fileContent = fs.readFileSync(vuePath, 'utf-8');
    // 得到文件内容中所有eid
    const ids  = getEids(fileContent)
    ids.forEach(id=>{
      if(Eids[id]) {
        repeatIds.push(id)
      }
      // 存储 eid 值及文件路径名
      // Eids[id] = vuePath;
    })
  })
}

readFile()
console.log(`重复的eid有(${repeatIds.length}个)：${repeatIds}`)
