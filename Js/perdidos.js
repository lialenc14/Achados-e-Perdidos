const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const confirmar = document.getElementById("confirmar");
const inicio = document.querySelector(".inicio");
const limpar = document.getElementById("limpar")

function criarItem({ nome, imagem, descricao }) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <img src="${imagem}" alt="item perdido" class="foto">
        <h3>${nome}</h3>
        <p>${descricao}</p>
        `;
    return div;
};

function carregarItem(){
    const itensSalvos = JSON.parse(localStorage.getItem("itens")) || []

    itensSalvos.forEach(dados => {
        const item = criarItem(dados);
        inicio.appendChild(item);
    });
};

if(confirmar){
    confirmar.addEventListener("click", function(){
        const NovoItem = {
            nome: nome.value,
            descricao: descricao.value,
            imagem: foto.value
        };
        const itens = JSON.parse(localStorage.getItem("itens")) || []

        itens.push(NovoItem);

        localStorage.setItem("itens", JSON.stringify(itens));

        const item = criarItem(NovoItem);
        inicio.appendChild(item);

        nome.value = "";
        descricao.value = "";
        foto.value = "";
    })
};

if(limpar){
    limpar.addEventListener("click", function(){
        localStorage.removeItem("itens");
        inicio.innerHTML = `<button id="limpar">Limpar lista</button>`;
    })
};

window.addEventListener("DOMContentLoaded", carregarItem);
