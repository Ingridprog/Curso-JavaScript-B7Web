function menuToggle(){

    let menu = document.getElementById('menu-area');

    if(menu.style.width == "200px"){
        menu.style.width = 0;
    }else{
        menu.style.width = 200
    }

/*

SOLUÇÃO DO PROFESSOR

    let menu = document.getElementById('menu-area');

    if(menu.classList.contains('menu-opened')){
        menu.classList.remove('menu-opened')
    }else{
        menu.classList.add('menu-opened')
    }
*/
    
}