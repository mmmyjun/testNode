const fs = require('fs')

fs.rename('1.txt', 'world.txt', () => {
    console.log("\nFile Renamed!\n");

    // List all the filenames after renaming 
}); 
// fs.rename('root/a.txt', 'root/b.txt', () => {
//     console.log("\nFile Renamed!\n");

//     // List all the filenames after renaming 
// });
fs.rename('E:/project/testNode/file/reName/root/a.txt', 'E:/project/testNode/file/reName/root/b.txt', () => {
    console.log("\nFile Renamed!\n");

    // List all the filenames after renaming 
});