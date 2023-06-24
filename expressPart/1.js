const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

// app.use('/static', express.static('public'))
console.log('__dirname', __dirname, path.join(__dirname, 'public'), express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})