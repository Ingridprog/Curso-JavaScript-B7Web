// Funções - Conjunto de códigos que podem ser usado em vários lugares

function alterar(titulo){
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = somar(8,9);
}

alterar("Usando parâmentros", "Campo preenchido com parâmetros");

function somar(x, y){
    let soma = x + y;
    return soma;
}

// EVENTOS - algum acontecimento - js pode reagir a um evento
// EVENTOS DE CLICK onmouseover/onmouseout/onclick
function clicou(){
    alert('Você clicou no botão!');
    document.getElementById('titulo').innerHTML = "Clicou Trocou!"
}

// EVENTOS DE TECLADO
/* 
onkeyup - quando solta a tecla
onkeydown - enquanto ela está pressionada

*/
function digitou(){
    console.log("Você digitou!");
}

function pegarEvento(e){
    console.log(e)

    if(e.keyCode == 13 && e.ctrlKey){
        alert("Dados salvos com sucesso!")

        console.log(document.getElementById('evento_teclado').value)
    }
}