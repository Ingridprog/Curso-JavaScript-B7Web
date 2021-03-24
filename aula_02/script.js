// CONDICIONAIS

var hora = 18;

if(hora >= 12 && hora < 18){
    console.log("BOA TARDE!");
}else if(hora < 12){
    console.log("BOM DIA!")
}else{
    console.log("BOA NOITE!");
}

if(hora == 12 || hora == 18){
    console.log('Hora do rush!');
}


// VARIÁVEIS 2/2

// hoisting - enviado para o escopo geral da página
var nome = 'Ingrid';

// fica apenas no escopo onde foi definida - só pode ser declarada uma vez
let nome2 = 'Pedro'
// let nome2 = 'Yasmin'


console.log(window.nome);
console.log(window.nome2);

if(nome == 'Ingrid'){
    // Apenas no escopo do if
    let idade = 22;
}

// console.log(idade);

// Não pode redefinir valor
const sobrenome = "Silva";

// sobrenome = "Pereira"

console.log(sobrenome);

const dados = {nome:'Ingrid', idade:22};

console.log(dados)

// usar let ou const


// TIPOS DE DADOS

// string
var materia = 'Biologia';

// number
var numeroMateria = 1;

// boolean
var estudado = true;

// undefined
var cidade;

var tipoMateria = typeof materia;

console.log(tipoMateria);

/* COMENTÁRIO DE BLOCO */
// COMENTÁRIO DE LINHA

// document.getElementById()
var titulo = document.getElementById('titulo');

titulo.innerHTML = "Olá, tudo bem?"

var campoNome = document.getElementById('campo_nome');

campoNome.value = 'Ingrid';
