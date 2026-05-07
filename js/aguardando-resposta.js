let lista = JSON.parse(localStorage.getItem('reclamacoes')) || [];
let tabela = document.querySelector('#tabela-abertos');

lista.forEach((item, index) => {
    if(item.status === "AGUARDANDO RESPOSTA"){
        tabela.innerHTML += `
            <tr>
                <td>${item.data}</td>
                <td>${item.departamento}</td>
                <td>${item.motivo}</td>
                <td>${item.produto}</td>
                <td>${item.lote}</td>
                <td>${item.quantidade}</td>
                <td><img src="${item.imagem}" width="50"></td>
                <td>
                    <button class="status responder" onclick="responder(${index})">RESPONDER</button>
                </td>
            </tr>
        `;
    }
});

function responder(index){
    localStorage.setItem('reclamacaoSelecionada', index);
    window.location.href = "resposta.html";
}

//localStorage.clear()