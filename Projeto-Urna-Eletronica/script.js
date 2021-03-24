let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricaoGeral = document.querySelector('.d-1-4')
let aviso = document.querySelector('.divisao-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero = ''
let votoBranco = false;
let votos = [];

function comecarEtapa(){

    // Pega a etapa atual
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = ''
    votoBranco = false;

    // Define a quantidade de quadradinhos
    for(let i = 0; i < etapa.numeros; i++){
        if(i == 0){
            numeroHtml += '<div class="numero pisca"></div>'
        }else{
            numeroHtml += '<div class="numero"></div>'
        }
        
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricaoGeral.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
    
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    console.log('atualizando interface...')
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        descricaoGeral.innerHTML = `Nome: ${candidato.nome} <br> Partido: ${candidato.partido}`
        aviso.style.display = 'block'
        
        let fotosHtml = ''

        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += ` <div class="d-1-img small-img"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }else{
                fotosHtml += ` <div class="d-1-img"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }
            
        }

        lateral.innerHTML = fotosHtml
    }else{
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricaoGeral.innerHTML = `<div class="aviso-grande pisca">VOTO NULO</div>`
    }
    
}

function clicou(num){
    let elementoNum = document.querySelector('.numero.pisca')

    // Preenche o número clicado no quadrado atual
    if(elementoNum != null){
        elementoNum.innerHTML = num;
        numero = `${numero}${num}`;

        elementoNum.classList.remove('pisca')
        if(elementoNum.nextElementSibling != null){
            elementoNum.nextElementSibling.classList.add('pisca')
        }else{
            atualizaInterface()
        }
        
    }
}

function branco(){
    numero = ''
    votoBranco = true;
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    numeros.innerHTML = '';
    descricaoGeral.innerHTML = `<div class="aviso-grande pisca">VOTO EM BRANCO</div>`
    lateral.innerHTML = '';
   
}

function corrigir(){
    comecarEtapa();
}

function confirmar(){

    let etapa = etapas[etapaAtual]

    let votoConfirmado = false;

    if(votoBranco){
        console.log('Confirmando para BRANCO')
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'BRANCO'
        })
    }else if(numero.length === etapa.numeros){
        console.log('Confirmando para ' + numero)
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
    }else{
        alert('VOTO INVÁLIDO')
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] != undefined){
            comecarEtapa()
        }else{
            document.querySelector('.tela').innerHTML = `<div class="aviso-final pisca">FIM</div>`
            console.log(votos)
        }
    }
}

comecarEtapa()