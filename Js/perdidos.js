const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const confirmar = document.getElementById("confirmar");
const inicio = document.querySelector(".inicio");
const limpar = document.getElementById("limpar")
const conta = document.querySelector('.conta');
const perfil = document.getElementById('perfil');

if (conta && perfil) {
  conta.style.display = 'none';

  perfil.addEventListener('click', function() {
    conta.style.display = conta.style.display === 'none' ? 'flex' : 'none';
  });
}


function criarItem({ nome, imagem, descricao, data, hora }) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
        <img src="${imagem}" alt="item perdido" class="foto">
        <div class="texto">
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <p id = "data">Data de registro: ${data}</p>
            <p id = "hora"></p>Hora de registro: ${hora}</p>
            <button class="solicitar">Solicitar Retirada</button>
        </div>
        `;
    return div;
};

function carregarItem(){
    const itensSalvos = JSON.parse(localStorage.getItem("itens")) || []

    itensSalvos.forEach(dados => {
        const item = criarItem(dados);
        inicio.appendChild(item);
    });

    if(itensSalvos.length === 0){
        inicio.innerHTML = `
        <div id = "vazio">Nenhum item perdido cadastrado.</div>
        <button id="limpar">Limpar lista</button>`;
    };
};

if(confirmar){
    confirmar.addEventListener("click", function(){

        const agora = new Date();
        const data = agora.toLocaleDateString();
        const hora = agora.toLocaleTimeString();

        const reader = new FileReader();

        reader.onload = function (e) {
            const NovoItem = {
            nome: nome.value,
            descricao: descricao.value,
            imagem: e.target.result,
            data: data,
            hora: hora
        };
        const itens = JSON.parse(localStorage.getItem("itens")) || []

        itens.push(NovoItem);

        localStorage.setItem("itens", JSON.stringify(itens));

        const item = criarItem(NovoItem);
        inicio.appendChild(item);

        nome.value = "";
        descricao.value = "";
        foto.value = "";
    }
    reader.readAsDataURL(foto.files[0]);
});

};

if(limpar){
    limpar.addEventListener("click", function(){
        localStorage.removeItem("itens");
        inicio.innerHTML = `
        <div id = "vazio">Nenhum item perdido cadastrado.</div>
        <button id="limpar">Limpar lista</button>`;
    })
};

window.addEventListener("DOMContentLoaded", carregarItem);
