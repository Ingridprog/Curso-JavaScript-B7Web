// DATAS

// Pega a data atual do sistema que ta utilizando a classe
let d = new Date();

console.log(d)

// Forma resumida
console.log(d.toDateString())

// Greenwich - tira o fuso
console.log(d.toUTCString())

// Definindo data
// let data = new Date(2021, 0, 1, 00,00,00);
let data = new Date('2021-01-01 00:00:00');

console.log(data);

// Data que começou a contagem
let inicio = new Date(0);
console.log(inicio.toUTCString())

// PEGANDO INFO ESPECÍFICAS

// Ano
console.log("ANO: " + d.getFullYear())

// Mês(começa do 0)
console.log("MÊS: " + (d.getMonth() + 1))

// Pegar o número do dia da semana (começa em 0)
console.log("DIA SEMANA NUM: " + d.getDay())

// Pegar o dia do mês
console.log("DIA SEMANA: " + d.getDate())

// Pegar as horas
console.log("HORA: " + d.getHours())

// Pegar os minutos
console.log("MINUTOS: " + d.getMinutes())

// Pegar os segundos
console.log("SEGUNDOS: " + d.getSeconds())

// Pegar os milisegundos
console.log("MILISEGUNDOS: " + d.getMilliseconds())

// Pegar o timestamp - desde de 1970
console.log("TIMESTAMP: " + d.getTime())


// Pega o horário atual sem criar obj ecmaScript 5
let invova = Date.now()
console.log(invova)

// MANIPULANDO

// d.setFullYear(2028);
// d.setMonth(7)
// d.setDate(d.getDate() + 5)
d.setHours(d.getHours() + 8)

let pega = d;

console.log('MANIPULANDO: ' + pega)