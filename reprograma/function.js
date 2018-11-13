// arquivo 01 node.js
const mostraMensagem = name => `Oie, ${name}`

function diga(name){
    console.log(mostraMensagem(name))
}

module.exports.digaOla = diga