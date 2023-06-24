import { readFile, statfsSync } from 'node:fs';
import { Buffer } from 'node:buffer';
// const fs = require('node:fs');


readFile('./img/rk.jpg', (err, data) => {
    if (err) throw err;
    console.log(data);

    const buf = Buffer.from(data, 'utf8');
    console.log(buf);
    console.log(buf.toString('base64'));
    let prefix = 'data:image/jpeg;base64,'
});

statfsSync