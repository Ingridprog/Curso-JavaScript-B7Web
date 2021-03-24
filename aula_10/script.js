// MATEMÁTICA

// PI
console.log(`PI: ${Math.PI}`)

// Arredondar
console.log(`Arredondar relativo: ${Math.round(3.5873)}`)

// Arredondar para baixo
console.log(`Arredondar para baixo: ${Math.floor(3.5873)}`)

// Arredondar para cima
console.log(`Arredondar para cima: ${Math.ceil(3.5873)}`)

// número absoluto
console.log(`Absoluto: ${Math.abs(-3.5873)}`)

// Retorna o menor valor
console.log(`Menor valor: ${Math.min(7, 100, 700, 20, 3, 14)}`)

// Retorna o maior valor
console.log(`Maior valor: ${Math.max(7, 100, 700, 20, 3, 14)}`)

// Número aleatório
console.log(`Aleatório: ${Math.floor(Math.random() * 100)}`)

// TIMERS

let timer;

function iniciar(){
    // setInterval - executa uma função a cada intervalo de tempo
    timer = setInterval(showTime, 1000)
}

function parar(){
    clearInterval(timer)
}


function showTime(){
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds()

    // TEMPLATE STRINGS
    let txt = `${h}:${m}:${s}`

    document.querySelector('.demo').innerHTML = txt
}

// setTimeOut - executa uma função apenas uma vez depois de um tempo - para parar antes de começar clearTimeOut()
timeout = setTimeout(function(){alert('Testando setTimeOut')}, 3000)

function naoTestar(){
    clearTimeout(timeout)
}

