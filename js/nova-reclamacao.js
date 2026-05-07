document.querySelector('#formReclamacao').addEventListener('submit', function(e){
    e.preventDefault();

    let fileInput = document.querySelector('#imagem');
    let file = fileInput.files[0];

    if(!file){
        alert("Selecione uma imagem!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(event){

        let reclamacao = {
            departamento: document.querySelector('#departamento').value,
            motivo: document.querySelector('#motivo').value,
            produto: document.querySelector('#produto').value,
            lote: document.querySelector('#lote').value,
            quantidade: document.querySelector('#quantidade').value,
            imagem: event.target.result,
            data: new Date().toLocaleDateString(),
            status: "AGUARDANDO RESPOSTA"
        };

        console.log(reclamacao); // 👈 pra testar

        let lista = JSON.parse(localStorage.getItem('reclamacoes')) || [];

        lista.push(reclamacao);

        localStorage.setItem('reclamacoes', JSON.stringify(lista));

        alert("Reclamação salva com sucesso!");
        window.location.href = "reclamacoes.html";
    };

    reader.readAsDataURL(file);
});

//localStorage.clear()