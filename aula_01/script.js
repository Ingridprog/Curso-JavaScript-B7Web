// OUTPUT

// obs: document é a página que é != janela

// 1º manipular elemento do html
document.getElementById('titulo').innerHTML = "Olá, tudo bem?";

// 2º document.write - Apenas se é carregado junto com a página - senão ele substitui o conteúdo
document.write("Como está o tempo hoje?");

// 3º Com a janela
alert("Cuidado!")

// 4º console
console.log("Mensagem no console!");

// VARIÁVEIS

var idade = 22;
var nasc = 1998
var ano = 2020

var nome = "Ingrid"
var sobrenome = "Pereira"

idade = ano - nasc

console.log("Idade: " + idade)
console.log(nome + " " + sobrenome)
