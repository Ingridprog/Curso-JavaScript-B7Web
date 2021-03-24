// ARRAY(listagem numerada)

let carros = [
   'Palio',
   'Uno',
   'Corola',
   'Ferrari',
   function(){
       console.log('Carros em promoção!')
   }
];

let alunos = new Array(['Pedro', 'Lucas'], ['Ingrid', 'Elisa']);

console.log(alunos)
console.log(alunos[1][0])

console.log(carros);

console.log("CARRO 1: " + carros[0])

carros[4]();
