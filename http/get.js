const https = require('https')
const options = {
    hostname: 'nodejs.org',
    port: 443,
    path: '/',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        // process.stdout.write(d)
        console.log("听到数据", d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()


const fs = require('fs')

fs.open('../http/1,json', 'r', (err, fd) => {
    //fd 是文件描述符。
    console.log('脖子',err,fd)
})