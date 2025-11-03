document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const perfil = document.getElementById('perfil');
  const conta = document.querySelector('.conta');

  if (conta) conta.style.display = 'none';

  document.addEventListener('click', (e) => {
    const solicitarBtn = e.target.closest('.solicitar');
    const item = e.target.closest('.item');

    if (solicitarBtn) {
      e.stopPropagation();
      solicitarBtn.classList.toggle('solicitado');
      solicitarBtn.textContent = solicitarBtn.classList.contains('solicitado')
        ? 'Item Solicitado'
        : 'Solicitar Retirada';
      return;
    }

    if (item && menu) {
      menu.classList.add('open');
      return;
    }

    if (perfil && (e.target === perfil || perfil.contains(e.target))) {
      e.stopPropagation();
      if (conta) conta.style.display = conta.style.display === 'flex' ? 'none' : 'flex';
      return;
    }

    if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !e.target.closest('.item')) {
      menu.classList.remove('open');
    }

    if (conta && e.target !== perfil && !conta.contains(e.target)) {
      conta.style.display = 'none';
    }
  });
});