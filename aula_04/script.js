// MUDANÇAS DE ESTILO

const titulo = document.getElementById('titulo');

function azul(){
    limpar()
    titulo.classList.add('azul');
}

function verde(){
    limpar()
   titulo.classList.add('verde');
}
    

function vermelho(){
    limpar()
    titulo.classList.add('vermelho');
}

function limpar(){
    titulo.classList.remove('azul');
    titulo.classList.remove('verde');
    titulo.classList.remove('vermelho');
}

function mostrarTelefone(elemento){
    document.getElementById('tel').classList.remove('oculto');
    elemento.style.display = 'none';
}