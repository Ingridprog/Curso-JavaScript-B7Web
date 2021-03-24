let formValidator = {
    handleSubmit: (event) => {

        event.preventDefault();

        let send = true;
        let inputs = form.querySelectorAll('input');

        formValidator.clearError();

        for(let i=0; i < inputs.length; i++){
            let input = inputs[i];
            let check = formValidator.checkInput(input)
            console.log(check)
            if(check !== true){
                send = false;
                formValidator.showError(input, check);
            }
        }
        if(send){
            form.submit();
        }
    },
    checkInput: (input)=>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=')
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Preencha este campo!';
                        }
                    break;
                    case 'min': 
                        if(input.value.length < rDetails[1]){
                            return `Este campo precisa ter pelo menos ${rDetails[1]} caracteres!`;
                        }
                    break;
                    case 'email':
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(!regex.test(input.value.toLowerCase())){
                            return 'Email Inválido!'
                        }
                    break;
                }
            }
        }
        return true;
    }, 
    showError: (input, error)=>{
        input.style.borderColor = '#F00';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearError: ()=>{

        let inputs = document.querySelectorAll('input');

        for(let i = 0; i < inputs.length; i++){
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');

        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove();
        }
    }
}

let form = document.querySelector('.formValidator');
form.addEventListener('submit', formValidator.handleSubmit);