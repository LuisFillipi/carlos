const { request } = require('node:http')
const http = require('node:http')
const { json } = require('stream/consumers')
//numero da porta pra liberar os dados do modulo
const PORT = 3333

//-----------METODOS--------------
//response.write:escreve
//response.writeHead: escreve o cabeçalho(define se é node,html,etc)
///-------------------------------------------------


//----------EXEMPLOS--------------------
//criando servidor, ele sempre trabalha com requisições (request) r devolve respostas (response)
//const server = http.createServer((request, response)=>{
//    response.write('Ola, Mundo! Modulo http')
//    response.end()
//})
//-------------------------------------

//exemplo 02
//writeHead = cabealho onde define se é html...
//const server = http.createServer((request, Response)=>{
//    Response.writeHead(201, {"Content-Type":"Text/plan"}) 201 é um codigo http para dizer "ok"
//    Response.end('Usuario Criado')
//})
//-----------------------------------------

//exemplo 03
//const server = http.createServer((request, Response)=>{
//    if(request.url === '/'){//http://localhost:3333/
//        Response.writeHead(200, {'Content-Type':'Text/plan'})
//        Response.end('pagina inicial')
//    }else if(request.url === '/sobre'){//http://localhost:3333/sobre
//        Response.writeHead(200, {'Content-Type':'Text/plan'})
//    Response.end('pagina sobre')
//    }else{
//    Response.writeHead(404, {'Content-Type':'Text/plan'})
//    Response.end('pagina não encontrada')
//    }
//})
//----------------------------------------

//exemplo 04
//const server = http.createServer((request,Response)=>{
//    if(request.url === '/'){
//        Response.writeHead(200, {'Content-Type':'Text/html'})
//        Response.write("<meta charset= utf8>")
//        Response.write('<h1>Pagina Inicial</h1>')
//        Response.end();
//    }else if(request.url === '/contatos'){
//        Response.writeHead(200, {'Content-Type':'Text/html'})
//        Response.write("<meta charset= utf8>")
//        Response.write('<h1>Pagina de contato</h1>')
//        Response.end();
//    }else{
//        Response.writeHead(200, {'Content-Type':'Text/html'})
//        Response.write("<meta charset= utf8>")
//        Response.write('<h1>Pagina não encontrada</h1>')
//        Response.end();
//    }
//})
//--------------------------------------------------

//exemplo 05
const obj = {
    nome:'Luis',
    idade:'17',
    profissão:'dono de cassino'
}
const server = http.createServer((request, Response)=>{
    if(request.url === '/'){
        Response.writeHead(200, {'Content-Type':'application/json'})
        Response.end(JSON.stringify(obj))
    }else if(request.url === '/contatos'){
        Response.writeHead(200, {'Content-Type':'application/json'})
        Response.end(JSON.stringify(obj))
    }else{
        Response.writeHead(404, {'Content-Type':'application/json'})
        Response.end(JSON.stringify(obj))
    }
})

//liberar o servidor para as pessoas acessarem, dois parametros(n° da porta)
server.listen(PORT, ()=>{
    console.log(`servidor on PORT ${PORT}`)
})