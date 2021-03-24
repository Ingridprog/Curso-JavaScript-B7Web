// MANIPULAÇÃO DE ARRAY 1/4 2/4

let lista = [
    'ovo', 'Farinha de trigo', 'Óleo', 'Agua', 'Açucar', 'Chocolate', 'Fermento'
]

// Transforma array em string
console.log(lista.toString())

// Transforma array em string - separa como eu quiser
console.log(lista.join('-'))

// Procura o item e retorna a posição - se não achar retorna -1
console.log(lista.indexOf('Chocolate'))

// Alteram o proprio array(referência) - remove o último item do array
lista.pop()
console.log(lista)

// Alteram o próprio array(referência) - remove o primeiro item do array
lista.shift()
console.log(lista)

// Alteram o próprio array(referência) - adiciona um item
lista.push('Brigadeiro')
console.log(lista)

// Adiciona item 
lista[lista.length] = 'Forma'
console.log(lista)

// Remove item do array

// Remove o item, mas mantém o lugar
// delete lista[0]
// console.log(lista)

// Remover
lista.splice(1,1)
console.log(lista)


// Concatenar 
let nome = ['Pedro', 'Miles', 'Valentin'];

let nome2 = ['Ingrid', 'Flora', 'Elisa'];

console.log(nome.concat(nome2))

// Ordem crescente
lista.sort()
console.log(lista)

// inverte Ordem
lista.reverse()
console.log(lista)

// MANIPULAÇÃO DE ARRAY 3/4 4/4
let arrayLista = [45, 4, 9, 16, 25]

// map - executa uma função em cada item do array
let arrayLista2 = arrayLista.map(function(item){
    return item *= 2;
})

console.log("UTILIZANDO MAP: " + arrayLista2)

// filter - executa uma função em cada item do array e retorna TRUE(adiciona no novo array) ou FALSE
let arrayLista3 = arrayLista.filter(function(item){
    if(item % 2 == 0){
        return true
    }
})

console.log("UTILIZANDO FILTER: " + arrayLista3)


// every - executa uma função em cada item do array e retorna true(se todos os item cumprirem a condição) ou false
let arrayLista4 = arrayLista.every(function(item){
    if(item > 20){
        return true;
    }
})

console.log("UTILIZANDO EVERY: " + arrayLista4)


// some - executa uma função em cada item do array e retorna true(se pelo menos um cumprir a condição) ou false
let arrayLista5 = arrayLista.some(function(item){
    return (item > 3) ? true : false;
})

console.log("UTILIZANDO SOME: " + arrayLista5)

// find - executa uma função em cada item do array e quando encontrar o primeiro item que cumpra a condição, ele retorna o elemento - 
// pode receber no parâmetro o item, o index ou o array inteiro - findIndex - retorna a posição
let arrayLista6 = arrayLista.find(function(item){
    return (item == 45) ? true: false;
})

console.log('UTILIZANDO FIND: ' + arrayLista6)

let usuarios = [
    {id: 1, nome: 'Ingrid', sobrenome: 'Pereira'},
    {id: 2, nome: 'Pedro', sobrenome: 'Medeiros'},
    {id: 3, nome: 'Yasmin', sobrenome: 'Silva'},
]

let pessoa = usuarios.find(function(item){
    return (item.id == 2)?true:false;
})

console.log(pessoa);




