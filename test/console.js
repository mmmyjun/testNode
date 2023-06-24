const http = require('node:http');
const net = require('node:net');
const { URL } = require('node:url');
const keepAliveAgent = new http.Agent({ keepAlive: true });
console.log('keepAliveAgent', keepAliveAgent)
console.log('net', net)
console.log('URL', URL)
