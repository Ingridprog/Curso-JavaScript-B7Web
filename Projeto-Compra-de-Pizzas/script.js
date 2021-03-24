let modalQtd = 1;
let cart = [];
let modalKey = 0;

const c = (e)=>{return document.querySelector(e)}
const cs = (e)=>{return document.querySelectorAll(e)}

pizzaJson.map((pizza, index)=>{
    
    // Parte 1 - Clonar o modelo - FAZER CÓPIA 1 
    let pizzariaItem = c('.models .pizza-item').cloneNode(true);
    
    // Parte 3 - Cria um atributo e pega o index da pizza
    pizzariaItem.setAttribute('data-key', index);

    // Parte 1 - Preenche os itens 2
    pizzariaItem.querySelector('.pizza-item--img img').src = pizza.img
    pizzariaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2).replace('.', ',')}`
    pizzariaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzariaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description

    //Parte 2 - Quando clicar na imagem ou no ícone +
    pizzariaItem.querySelector('a').addEventListener('click', (e)=>{

        // Tira a ação natural de link(atualizar a página)
        e.preventDefault();

        // Parte 3 - A partir do a vai procurar o elemento mais próximo que tenha a classe pizza-item
        // e vai pegar o atributo data-key
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQtd = 1;
        modalKey = key;

        // console.log(pizzaJson[key])

        // Parte 3 - Preeche os campos da modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;

        // 1 - Resetar tamanho selecionado
        c('.pizzaInfo--size.selected').classList.remove('selected');

        // Parte 4 - 2 - Preeche os tamanhos da pizza
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{

            if(sizeIndex == 2){
                size.classList.add('selected');
            }

            // size é o próprio item, pois o cs retorna um array de elementos
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQtd;

        //Parte 2 -  Animação para abrir a modal de detalhes da pizza - Acontece(0 para 1) em 0.5 segundo de acordo com o css
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })
    
    // Parte 1 - Adicionar os clones na area de pizza - joga na tela 3
    c('.pizza-area').append(pizzariaItem);
});

// Parte 5 - Fechar o modal no botão cancelar e voltar
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item=>{
    item.addEventListener('click', closeModal)
}))

// Eventos do Modal 
function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

// Parte 6 - Eventos de adicionar e retirar pizzas
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQtd++;
    c('.pizzaInfo--qt').innerHTML = modalQtd;
})

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQtd > 1){
        modalQtd--;
    }
    c('.pizzaInfo--qt').innerHTML = modalQtd;
})

// Parte 7 - Evento de selecionar o tamanho 
cs('.pizzaInfo--size').forEach((size, sizeIndex) =>{
    size.addEventListener('click', ()=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
})

// Parte 8 - Adicionar ao Carrinho
c('.pizzaInfo--addButton').addEventListener('click', ()=>{
    // qual a pizza? tamanho? quantidade?
    // console.log('Pizza' + modalKey)
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    // console.log('Quantidade ' + modalKey)

    // Cria um identificador para verificar se há um item do mesmo tamanho para apenas aumentar a quantidade
    let identifier = `${pizzaJson[modalKey].id}@${size}`;

    // Se achar um identifier igual, retorna o index
    let key = cart.findIndex((item)=>item.identifier == identifier)

    // Se encontrar altera a quantidade senão encontrar cria novo item no carrinho
    if(key > -1){
        cart[key].qtd += modalQtd;
    }else{
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qtd: modalQtd
        });
    }

    closeModal();

    updateCart();

})

c('.menu-openner').addEventListener('click', ()=>{
    if(cart.length > 0){
        c('aside').style.left = '0';
    }
})

c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left = '100vw';
})

// Parte 9 - Carrinho
function updateCart(){
    c('.menu-openner span').innerHTML = cart.length;

    if(cart.length > 0){
        c('aside').classList.add('show');

        // Para não criar redundância no cart Ex mussarela, mussarela e calarebresa ...
        c('.cart').innerHTML = '';

        let subtotal = 0;

        // Procura no pizzaJson os item que estão no cart e retorna os itens 
        for(let i in cart){
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);

            let cartItem = c('.models .cart--item').cloneNode(true)

            subtotal += pizzaItem.price * cart[i].qtd;

            // Tamanho da pizza selecionada
            let tamanho;

            switch(cart[i].size){
                case 0: tamanho = 'P'; break;
                case 1: tamanho = 'M'; break;
                case 2: tamanho = 'G'; break;
            }

            cartItem.querySelector('.cart--item img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = `${pizzaItem.name}(${tamanho})`;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qtd; 
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qtd++;
                updateCart();
            })
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qtd > 1){
                    cart[i].qtd--;
                }else{
                    cart.splice(i, 1)
                }
                updateCart();
            })

            c('.cart').append(cartItem)
        }

        desconto = (subtotal * 0.1).toFixed(2);
        total = (subtotal - desconto).toFixed(2);

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.replace('.', ',')}`;
        c('.total span:last-child').innerHTML = `R$ ${total.replace('.', ',')}`;

    }else{
        c('aside').classList.remove('show')
        c('aside').style.left = '100vw';
    }
}
