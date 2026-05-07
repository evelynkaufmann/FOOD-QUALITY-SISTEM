let btnAdd = document.querySelector('#botao-add');


//Criar um evento de clique para o botão que irá executar a funcion anonima
btnAdd.addEventListener("click", function(event){
    let loginInput = document.querySelector('#login');
    let senhaInput = document.querySelector('#senha');

    let login = loginInput.value;
    let senha = senhaInput.value;

    if(login === "" || senha === ""){
        event.preventDefault();
        alert("Você não preencheu todos os campos!");

        loginInput.value = "";
        senhaInput.value = "";

        loginInput.focus();

    }else {
        alert("LOGIN REALIZADO COM SUCESSO!");
    }
    });

    //localStorage.clear()