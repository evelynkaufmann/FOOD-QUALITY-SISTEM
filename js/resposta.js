let index = localStorage.getItem('reclamacaoSelecionada');
let lista = JSON.parse(localStorage.getItem('reclamacoes')) || [];

if(index === null){
    alert("Nenhuma reclamação selecionada!");
    window.location.href = "reclamacoes.html";
}

index = parseInt(index);

let reclamacao = lista[index];

if(!reclamacao){
    alert("Erro ao carregar reclamação!");
    window.location.href = "reclamacoes.html";
}

console.log(reclamacao);

// preencher os campos
document.querySelector('#departamento').value = reclamacao.departamento;
document.querySelector('#motivo').value = reclamacao.motivo;
document.querySelector('#produto').value = reclamacao.produto;
document.querySelector('#lote').value = reclamacao.lote;
document.querySelector('#quantidade').value = reclamacao.quantidade;

let img = document.querySelector('#imagem-preview');
if(img && reclamacao.imagem){
    img.src = reclamacao.imagem;
}

// SALVAR RESPOSTA
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    let respostaTexto = document.querySelector('#resposta-texto').value;
    let statusSelecionado = document.querySelector('input[name="status"]:checked');
    let responsavel = document.querySelector('#responsavel').value;

    if(!statusSelecionado){
        alert("Selecione um status!");
        return;
    }

    // atualizar objeto
    reclamacao.resposta = respostaTexto;
    reclamacao.status = statusSelecionado.value;
    reclamacao.responsavel = responsavel;
    reclamacao.dataResposta = new Date().toLocaleDateString();

    // salvar de volta
    lista[index] = reclamacao;

    localStorage.setItem('reclamacoes', JSON.stringify(lista));

    alert("Resposta salva com sucesso!");

    window.location.href = "reclamacoes.html";
});


//localStorage.clear()