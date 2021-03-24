// MANIPULAÇÃO DE STRING

let nome = 'Ingrid Pereira da Silva';

// Quantidade de caractere
console.log("Quantidade de caractere: " + nome.length)

// Posição em que começa - se não existir retorna -1
console.log('Posição que começa o caractere: ' + nome.indexOf('g'))

// Extrair info - (começo, fim) - pode começar do fim
console.log('Extrair info: ' + nome.slice(-5))

// Extrair info - (começo, fim)
console.log('Extrair info: ' + nome.substring(7, 14))

// Extrair info - (começo, qtd de caractere) - pode começar do fim
console.log('Extrair info: ' + nome.substr(7, 14))

// Substituir caracteres - nesse exemplo não está alterando a variavel nome
console.log('Substituir caracteres: ' + nome.replace('da Silva', 'Medeiros'))

// Caixa alta
console.log('Caixa alta: ' + nome.toUpperCase())

// Caixa baixa
console.log('Caixa baixa: ' + nome.toLowerCase())

// Concatenar 
console.log('Concatenar: ' + nome.concat(' - Estudando'))

// Tirar espaçamentos do começo e do final
console.log(nome.trim())

// Indicar o index e descobrir o caractere na posição - ecmascript 5 - nome[4]
console.log(nome.charAt(4))

// Transformar string em array
console.log(nome.split(' '))

// String, padStart, padEnd

let telefone = '55';

// padEnd(min de caracteres, preenche com isso)
console.log(telefone.padEnd(9, '*'))

// padStart(min de caracteres, preenche com isso)
console.log(telefone.padStart(9, '*'));

// EXEMPLO PRÁTICO
let cartao = '1234123412341234';

let last = cartao.slice(-4);

console.log("ESSE É O SEU CARTÃO -> " + last.padStart(16, '*') + '?')

// MANIPULAÇÃO DE NÚMEROS

let num = 10;
let numString = '25.55';

// Transforma número em string
console.log(num.toString())

// Define casas decimais
console.log(num.toFixed(2))

// Tranforma string em número
console.log(parseInt(numString) + 5);

// Transforma string em número e preserva os decimais
console.log(parseFloat(numString) + 5);