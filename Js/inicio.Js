document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll(".item");
  const menu = document.querySelector(".menu");
  const perfil = document.getElementById("perfil");
  const conta = document.querySelector(".conta");


  if (!menu) return;

  document.querySelectorAll('.solicitar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('solicitado');
      btn.textContent = btn.classList.contains('solicitado')
        ? 'Item Solicitado'
        : 'Solicitar Retirada';
    });
  });

  items.forEach(function(it) {
    it.addEventListener("click", function(){
      menu.classList.add('open');
    });
  });

  document.addEventListener('click', function(e) {
    if (!menu.classList.contains('open')) return;
    if (!menu.contains(e.target) && !e.target.closest('.item')) {
      menu.classList.remove('open');
    }
  });

  if (perfil && conta) {
    conta.style.display = conta.style.display || 'none';
    perfil.addEventListener("click", function(e){
      e.stopPropagation();
      conta.style.display = conta.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener('click', function(ev){
      if (!conta.contains(ev.target) && ev.target !== perfil) {
        conta.style.display = 'none';
      }
    });
  }

});
