const http = require('node:http');
const net = require('node:net');
const { URL } = require('node:url');
const agent = new http.Agent({ keepAlive: true });

const keepAliveAgent = new http.Agent({ keepAlive: true });
// console.log('keepAliveAgent', keepAliveAgent)
// console.log('net', net)
// console.log('URL', URL)

const postData = JSON.stringify({
    'msg': 'Hello World22s!',
});
// Server has a 5 seconds keep-alive timeout by default
http.createServer((req, res) => { // ServerResponse
    // res.setEncoding('utf8');
    console.log('海', req.path, req.params, req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    // res.write('hello~~2\n');
    // res.end();
    
    if (req.url == '/aa?bb=2') {
        res.end(postData);
    } else {
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    }
})
    .listen(3000);
http.get('http://localhost:3000/qq/aa?bb=2', { agent }, (res) => { // IncomingMessage
    // console.log('客户端', res)
    console.log(111)
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log('接收到的数据',parsedData);
        } catch (e) {
            console.error(`报错${e}`);
        }
    });
});

const req = http.request({
    port: 3000,
    host: '127.0.0.1',
    method: 'get',
    path: '/aa?bb=2',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
    }
}, (res) => { // IncomingMessage
    // console.log('客户端', res)
    console.log(22)
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log('接收到的数据22', parsedData);
        } catch (e) {
            console.error(`报错22${e}`);
        }
    });
});
req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});
// Write data to request body
// req.write(postData);
req.end();



// http.get('http://localhost:3000/wwwwwww/aa?bb=2', { agent }, (res) => { // IncomingMessage
//     // console.log('客户端', res)
//     console.log(4444)
//     res.on('data', (data, e) => {
//         console.log('44444444444~~', data, e)
//         // Do nothing
//     });
// });

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('X-Foo', 'bar');
//     res.writeHead(200, { 'Content-Type': 'text/plain', 'statusMessage': 'Not found' });
//     // res.statusCode = 404;
//     // res.statusMessage = 'Not found';
//     res.end('巴啦啦', 'utf-8');
// });
// server.on('clientError', (err, socket) => {
//     socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });
// server.listen(3000);



// Create an HTTP server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okkkay');
// });
// server.on('upgrade', (req, socket, head) => {
//     socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//         'Upgrade: WebSocket\r\n' +
//         'Connection: Upgrade\r\n' +
//         '\r\n');
//     socket.pipe(socket); // echo back
// });
// // Now that server is running
// server.listen(1337, '127.0.0.1', () => {
//     // make a request
//     const options = {
//         port: 1337,
//         host: '127.0.0.1',
//         headers: {
//             'Connection': 'Upgrade',
//             'Upgrade': 'websocket',
//         },
//     };
//     const req = http.request(options);
//     req.end();
//     // req.on('upgrade', (res, socket, upgradeHead) => {
//     //     console.log('got upgraded!');
//     //     socket.end();
//     //     process.exit(0);
//     // });
// });



// const postData = JSON.stringify({
//     'msg': 'Hello World!',
// });
// const options = {
//     // hostname: 'www.baidu.com',
//     port: 3000,
//     path: 'http://localhost:3000',
//     method: 'get',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(postData),
//     },
// };
// const req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data in response.');
//     });
// });
// req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//     console.log(e)
// });
// // Write data to request body
// req.write(postData);
// req.end();
// console.log(Buffer.byteLength(postData))