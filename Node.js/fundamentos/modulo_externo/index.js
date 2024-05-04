console.log(process.argv)

const args = process.argv.slice(2)
//O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
//strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. Em Javascript, uma string sempre estará entre aspas.
console.log(args)

const nome = args[0].split('=')[1]//O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caractere separador é removido das substrings resultantes no array.
console.log(nome);

const idade = args[1].split('=')[1]
console.log(idade);