const http = require('http')

const port = 3000
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('你好世界\n')
})

server.listen(port, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})

const fun = async (e) => {
    return 4;
}
// const fun =  (e) => {
//     return Promise.resove(4);
// }
console.log(fun)
console.dir(fun)
fun().then(console.log)