// SWITCH
function diaSemana(){
    let dia = document.getElementById('texto').value;
    let nome = '';
    let nomeDia = ''
    
    switch(dia){
        case "1": nome = "DOMINGO"; break;
        case "2": nome = "SEGUNDA-FEIRA"; break;
        case "3": nome = "TERÇA-FEIRA"; break;
        case "4": nome = "QUARTA-FEIRA"; break;
        case "5": nome = "QUINTA-FEIRA"; break;
        case "6": nome = "SEXTA-FEIRA"; break;
        case "7": nome = "SÁBADO"; break;
        default: nome = "Dia inválido"
    }
    
    switch(dia){
        case "7":
        case "1":
            nomeDia = "FIM DE SEMANA"; break;
    }
    
    document.getElementById('resultado').innerHTML = 'Hoje é : ' + nome + " - " + nomeDia; 
}


// FOR LOOP 
// FOR LOOP ARRAY

let texto = '';

for(let i = 0; i <= 10; i++){
    texto += i + "<br>"
}

document.getElementById('demo').innerHTML = texto;


let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla']

let html = "<ul>"

for(let i in carros){
    html += `<li> ${carros[i]} </li>`
}

html += "</ul>"

document.getElementById('demo2'). innerHTML = html

// WHILE

let c = 0;
let texto1 = '';

while(c <= 10){
    texto1 += "Contagem está em " + c + "<br>";
    c++;
}

document.getElementById('demo3').innerHTML = texto1;