import fetch from 'node-fetch'
const qq = async () => {
    const response = await fetch('https://github.com/');
    const body = await response.text();

    console.log(body);
}
qq()