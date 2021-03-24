// PROMISE - da um resultado imediato informando que o resultado vem depois - promessa de resultado

function fazer(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        resolve('OK');
       }, 3000)
    });
}

// A função fazer() tem um promessa a partir disso(then)...
fazer().then((resposta)=>{
    console.log(resposta);
})

/**************************************************************************************/
// AJAX/FETCH - permite fazer requisições ajax

// const params = {
//     method: 'POST',
//     body: JSON.stringify({
//         nome: 'Ingrid',
//         idade: 22
//     })
// };

// recebe uma promise

function requisitar(){
    fetch('https://alunos.b7web.com.br/api/ping' /*, params*/)
    .then((resposta)=>resposta.json())
    .then((json)=>{
        console.log(json)
    });

    // Pode executar primeiro pois o fetch retorna uma promessa e o then executa quando tiver a resposta
    console.log('Alguma coisa')
}

// requisitar()

/*****************************************************************************************/

// ASYNC/AWAIT

// async para continuar o resto do código sem esperar o retorno dela primeiro
async function requisitar2(){
    // Vai executar o fetch e vai esperar a resposta 
    const resposta = await fetch('https://alunos.b7web.com.br/api/ping')

    // Esperar a resposta e armazenar na variavel
    const json = await resposta.json()

    console.log(json)

    // Só executa esse depois do anterior, pois ele fica esperando a resposta
    console.log('Alguma coisa')
}

requisitar2()

console.log('TEXTOOO')
