const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("data");
const confirmar = document.getElementById("confirmar");
const inicio = document.querySelector(".inicio");

confirmar.addEventListener("click", function(){
    function criarItem({ nome, imagem, descricao }) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <img src="${imagem}" alt="item perdido" class="foto">
        <h3>${nome}</h3>
        <p>${descricao}</p>
        `;
        return div;
    }

    const item = criarItem({
        nome: nome.value,
        descricao: descricao.value,
        imagem: foto.value
    });

    inicio.appendChild(item);
    
    nome.value = "";
    descricao.value = "";
    foto.value = "";
})