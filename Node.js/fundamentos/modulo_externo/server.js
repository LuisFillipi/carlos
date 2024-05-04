import minimist from "minimist";

const argumentos = minimist(process.argv.slice(2))

const nome = argumentos['nome']
const idade = argumentos['idade']
console.log(`o nome ${nome} e idade ${idade} anos`)
