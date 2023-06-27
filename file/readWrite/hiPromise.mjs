import { readFile ,writeFile } from 'node:fs/promises';

async function getContentFromPromise() {
    let newContent = 'Some newContent!';
    console.log('newContent:', newContent)
    newContent = await readFile('testPromise.txt', 'utf8');
    console.log('newContent22:', newContent)
    writeFile('resultPromise.txt', newContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('getContentFromPromise file written successfully')
        // file written successfully
    });
}
getContentFromPromise()