// const EventEmitter = require('events');

// const evento = new EventEmitter();

// evento.on('msn', ()=> {
//     console.log('Olá')
// });

// evento.emit('msn');

const EventEmitter = require('events')

const leitura = new EventEmitter()

leitura.on('ler',()=>{
    console.log('Qual o último livro que você leu?')
})

leitura.emit('ler')