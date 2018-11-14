//criando nosso primeiro servidor!

const http = require('http')// esse módulo é baseado no EventEmitter

const server = http.createServer((req, res) =>{
  if (req.url === '/'){
    res.write('Hello World')
    res.end()
  }
  if (req.url === '/reprograma'){
    res.whrite(JSON.stringify([1, 2, 3]))
    res.end()
  }
})

// server.listen(3000)
// console.log('Escutando na porta 02 3000...')

//Ouvindo um evento pre-existente do módulo

server.on('connection', ()=>{ // connection emite quando uma página é carregada
  console.log('Página carregada')
})

server.listen(3000)
console.log('Escutando na porta 3000...')