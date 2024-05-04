import http from 'node:http'
import { resolve } from 'node:path'

const PORT = 3333

//** 5 rotas
// * get -> listar todos os usuarios
// * get -> listar um unico usuario 
// * post -> cadastrar usuarios 
// * put -> atualizar usuario
// * delete -> deletar usuario
// --- 3 tipos de requisição
// body => via formulario -> POST
// router -> parametros -> get,put,delete, path
// query -> /usuarios?param1=valor1&param2=valor2 -> GET
// * 

const usuarios = []//base de dados
const server = http.createServer((request, response)=>{
const {method, url} = request

//localhost:33/usuario/{id}
if(method === 'GET' && url === ('/usuarios')){
    response.writeHead(200,{"content-type":"application/json"});
    response.end(JSON.stringify(usuarios))

}else if(method === 'POST' && url === ('/usuarios')){
    let body = ''
    request.on ('data', (chunk)=>{
        body += chunk.toString()
    })
request.on('end', ()=>{
    const novoUsuario = JSON.parse(body)
    novoUsuario.id = usuarios.length + 1
    usuarios.push(novoUsuario)
    response.writeHead(201, {'content-TYpe' : 'application/json'})
    response.end(JSON.stringify(novoUsuario))
    //console.log(novoUsuario)
    //response.end()
})
}else if(method === 'PUT' && url.startsWith('/usuarios/')){ //startWitch = " se começar com " se começar com vai realizar o que se pede
    response.end('GET/usuarios')

}else if(method === 'DELETE' && url.startsWith('/usuarios/')){
    response.end('GET/usuarios')

}else if(method === 'GET' && url.startsWith('/usuarios/')){
    response.end('GET/usuarios')
}else{
    response.writeHead(404,{"content-type":"application/json"});
    response.end(JSON.stringify({message: 'Rota não existe'}))
}

})

server.listen(PORT,()=>{
    console.log(`servidor on PORT: ${PORT}`)
})

