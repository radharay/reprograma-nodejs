const EventEmitter = require('events')

class Calculo extends EventEmitter{
    calcular(n1, n2) {
        this.emit('media', n1, n2)
    }
}

module.exports.Calculo