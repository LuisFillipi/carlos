// modulos externos
// modulos internos
// modulos cores
const path = require(' node:path ')
console.log(path)

const extensao = path.extname(' documento.css ')
if(extensao === '.html'){
    console.log(' arquivo enviado ')
}else{
    console.log('Arquivo com extensao diferente ')
}
console.log(extensao)