// OBJETOS(listagem nomeada)

// objetos tem propriedades
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar:function(){
        this.ligado = true
        console.log("Ligando o " + this.modelo + " ...VRUUUM!")
    },
    acelerar:function(){
        if(this.ligado){
            console.log('ACELERAR!')
        }else{
            console.log('O carro não pode ser acelerado!')
        }
        
    },
    desligar:function(){
        this.ligado = false;
        console.log("Desligando Carro!")
    }
}

console.log("NOME: " + carro.nome)
carro.ligar()
carro.acelerar()
carro.desligar()


let array = [
    {nome: 'Fiat', modelo: 'UNO'},
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Toyota', modelo: 'Corolla'}
];

console.log(array[2].modelo)

