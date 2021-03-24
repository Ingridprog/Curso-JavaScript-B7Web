// DESCONSTRUINDO ARRAY

// é feito na ordem que o array é criado

let pessoa = ['Ingrid Pereira da Silva','Ingrid', 'Pereira', 22, '@ingrid'];

let [,nome, sobrenome, idade, instagran] = pessoa;

console.log(nome, sobrenome, idade, instagran);


// Criar um array desconstruído
let [user='Ingrid',credito, debito, saldo] = [,0,0,0];

console.log(user, credito, debito, saldo)

// Com função

function criar(){
    return [1,2,3];
}

let [a, b, c] = criar();

console.log(a, b, c)


// DESCONSTRUINDO OBJETO
let usuario = {
    name: 'Ingrid',
    surname: 'Pereira',
    age: 22,
    social:{
        facebook:'ingrid_dev.facebook',
        instagran: {
            url: '@ingrid_dev',
            seguidores: 2000000
        }
    }
}

// Declarar variavel com nome diferente, valor padrão e itens dentro de um objeto
let {name:pessoaNome, surname, age = 18, social:{ instagran:{url:insta, seguidores} }} = usuario;

console.log(pessoaNome, surname, age, insta, seguidores)

let{} = usuario;

// desconstruir no parâmetro da função
function nomeCompleto({name, surname='Silva'}){
    return `${name} ${surname}`
}

console.log(nomeCompleto(usuario));
