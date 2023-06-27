import { open } from 'node:fs/promises';

let filehandle;
// try {
    filehandle = await open('a.txt', 'r');
//     console.log(filehandle)
// } finally {
//     await filehandle?.close();
// }
const stream = filehandle.createReadStream();
// console.log(stream);
setTimeout(() => {
    stream.close(); // This may not close the stream.
    // Artificially marking end-of-stream, as if the underlying resource had
    // indicated end-of-file by itself, allows the stream to close.
    // This does not cancel pending read operations, and if there is such an
    // operation, the process may still not be able to exit successfully
    // until it finishes.
    stream.push(null);
    stream.read(0);
    filehandle?.close();
}, 100);


const file = await open('a.txt');

for await (const chunk of file.readableWebStream())
    console.log(chunk);

await file.close();


// ArrayBuffer Uint8Array
// Buffer Blob互转 stream
// base64
