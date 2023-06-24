const express = require('express');
// import express from 'express';
const fs = require('fs')
// import fs from 'fs'

const app = express()

// console.log(app)

app.get('/abc', (req, res) => {
    const jsonStr = fs.readFileSync('./1.json', { encoding: 'utf-8' })
    console.log('req访问abc', req, jsonStr)
    res.status(200).json(JSON.parse(jsonStr))
    // res.status(200).type('application/json').write(jsonStr)
    // res.status(200).type('application/json').send(jsonStr)
})
const serr = app.listen(3000, () => console.log('server ready'))

process.argv.forEach((val, index) => {
    console.log('参数',`${index}: ${val}`)
})

// process.exit(1)
// process.on('SIGTERM', () => {
//     serr.close(() => {
//         console.log('process terminate')
//     })
// })

// process.env.NODE_ENV = 'devvvv' // "development"
// console.log(process, process.env.NODE_ENV, 'process')
