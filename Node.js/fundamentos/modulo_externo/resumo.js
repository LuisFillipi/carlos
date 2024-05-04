// criar um modulo interno com a funcao soma
// importar o modulo interado no arquivo server.js
// baixar o modulo minimist
// no terminal, node index.js --a=5 --b=5
// a soma de a + b = ab

import soma from './soma'
import minimist from "minimist";

const somar = soma

const argumentos = (process.argv.slice(2))