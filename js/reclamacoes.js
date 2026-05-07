let lista = JSON.parse(localStorage.getItem('reclamacoes')) || [];

let tabelaAbertos = document.querySelector('#tabela-abertos');
let tabelaRespondidos = document.querySelector('#tabela-respondidos');

function getStatusClass(status) {
    switch(status) {
        case "PROCEDENTE":
            return "procedente";
        case "NÃO PROCEDENTE":
            return "nao-procedente";
        case "AGUARDANDO RESPOSTA":
            return "aguardando";
        default:
            return "";
    }
}

lista.forEach((item, index) => {

    if(item.status === "AGUARDANDO RESPOSTA"){

        let linha = `
            <tr>
                <td>${item.data}</td>
                <td>${item.departamento}</td>
                <td>${item.motivo}</td>
                <td>${item.produto}</td>
                <td>${item.lote}</td>
                <td>${item.quantidade}</td>
                <td><img src="${item.imagem}" width="50"></td>
                <td><span class="status aguardando">${item.status}</span></td>
            </tr>
        `;

        tabelaAbertos.innerHTML += linha;
    } else {
        tabelaRespondidos.innerHTML += `
            <tr>
                <td>${item.motivo}</td>
                <td>${item.produto}</td>
                <td>${item.data}</td>
                <td>${item.dataResposta}</td>
                <td><span class="status ${getStatusClass(item.status)}">${item.status}</span></td>
            </tr>
        `;
    }
});

function abrirReclamacao(index){
    localStorage.setItem('reclamacaoSelecionada', index);
    window.location.href = "resposta.html";
}




//localStorage.clear()

