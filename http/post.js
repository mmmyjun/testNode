const https = require('https')

const data = JSON.stringify({
    todo: '做点事情'
})

const options = {
    hostname: 'nodejs.org',
    port: 443,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`状态码: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()


const axios = require('axios')

axios
    .post('http://nodejs.org', {
        todo: '做点事情'
    })
    .then(res => {
        console.log(`状态码axios: ${res.statusCode}`)
        console.log('axios res',res)
    })
    .catch(error => {
        console.error(error)
    })