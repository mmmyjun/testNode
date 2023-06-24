const EventEmitter = require('events')
const eventEmitter = new EventEmitter();
console.log(eventEmitter, 'eventEmitter')

eventEmitter.on('start', (start, end) => {
    console.log(`从 ${start} 到 ${end}`)
})

eventEmitter.emit('start', 1, 100)