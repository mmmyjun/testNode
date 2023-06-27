const http = require('http');
const fs = require('fs');

const path = require('path');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



async function getContentOfText() {
    let newContent = 'Some newContent!';
    const readResult = fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('readFile test.txt',data);
        newContent = data;
        fs.writeFile('result.txt', newContent, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('file written successfully')
            // file written successfully
        });
    });
    console.log('readResult', readResult)
}

// var data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data, '同步读取到的');




// document.getElementById('button').addEventListener('click', () => {
//     // item clicked
//     console.log('button click~~~')
// });
// window.addEventListener('load', () => {
//     // window loaded
//     // do what you want
//     console.log('window loaded~~~')
// });


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('start', (start, end) => {
//     console.log(`started from ${start} to ${end}`);
// });
// eventEmitter.emit('start', 1, 100);



fs.stat('./test.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('test.txt是文件吗', stats.isFile()) // true
    console.log('test.txt是目录吗', stats.isDirectory())// false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
});

// const fs = require('fs/promises');
// async function example() {
//     try {
//         const stats = await fs.stat('/Users/joe/test.txt');
//         stats.isFile(); // true
//         stats.isDirectory(); // false
//         stats.isSymbolicLink(); // false
//         stats.size; // 1024000 //= 1MB
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();




// const notes = '/users/joe/notes.txt';
// path.dirname(notes); // /users/joe
// path.basename(notes); // notes.txt
// path.extname(notes); // .txt
// path.basename(notes, path.extname(notes)); // notes

// const name = 'joe';
// path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'
// path.resolve('joe.txt'); // '/Users/joe/joe.txt' if run from my home folder
// path.resolve('tmp', 'joe.txt'); // '/Users/joe/tmp/joe.txt' if run from my home folder  |||| If you specify a second parameter folder, resolve will use the first as a base for the second:
// path.resolve('/etc', 'joe.txt'); // '/etc/joe.txt'  If the first parameter starts with a slash, that means it's an absolute path:
// path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'


// const ffff= fs.open('./test.txt', 'a+', (err, fd) => {
//     // fd is our file descriptor
//     console.log('只读打开文件test.txt', err, fd)
// });
// console.log('ffffffffff', ffff)


// try {
//     const fd = fs.openSync('/Users/joe/test.txt', 'r');
// } catch (err) {
//     console.error(err);
// }

// const fs = require('fs/promises');
// // Or const fs = require('fs').promises before v14.
// async function example() {
//     let filehandle;
//     try {
//         filehandle = await fs.open('/Users/joe/test.txt', 'r');
//         console.log(filehandle.fd);
//         console.log(await filehandle.readFile({ encoding: 'utf8' }));
//     } finally {
//         if (filehandle) await filehandle.close();
//     }
// }
// example();




// try {
//     const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// const fs = require('fs/promises');
// async function example() {
//     try {
//         const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();


// 往文件追加内容
// fs.appendFile('file.log', newContent, err => {
//     if (err) {
//         console.error(err);
//     }
//     // done!
// });

// console.log('测试test文件的信息', fs.lstatSync('test.txt'))


// try {
//     fs.writeFileSync('/Users/joe/test.txt', content);
//     // file written successfully
// } catch (err) {
//     console.error(err);
// }

// const fs = require('fs/promises');
// async function example() {
//     try {
//         const content = 'Some content!';
//         await fs.writeFile('/Users/joe/test.txt', content);
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();

// fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => { });



// const fs = require('fs/promises');
// async function example() {
//     try {
//         const content = 'Some content!';
//         await fs.appendFile('/Users/joe/test.txt', content);
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();




// const folderName = '/Users/joe/test';   
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName);
//     }
// } catch (err) {
//     console.error(err);
// }


// const folderPath = '/Users/joe';
// fs.readdirSync(folderPath);
// // You can get the full path:
// fs.readdirSync(folderPath).map(fileName => {
//     return path.join(folderPath, fileName);
// });

// const isFile = fileName => {
//     return fs.lstatSync(fileName).isFile();
// };
// fs.readdirSync(folderPath)
//     .map(fileName => {
//         return path.join(folderPath, fileName);
//     })
//     .filter(isFile);




// Rename a folder
// fs.rename('/Users/joe', '/Users/roger', err => {
//     if (err) {
//         console.error(err);
//     }
//     // done
// });

// try {
//     fs.renameSync('/Users/joe', '/Users/roger');
// } catch (err) {
//     console.error(err);
// }

// async function example() {
//     try {
//         await fs.rename('/Users/joe', '/Users/roger');
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();



// Remove a folder
// fs.rmdir(dir, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`${dir} is deleted!`);
// });
// fs.rm(dir, { recursive: true, force: true }, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`${dir} is deleted!`);
// });