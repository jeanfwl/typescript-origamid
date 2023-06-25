// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

btnMobile?.addEventListener('click', toggleMenu);

function toggleMenu(event: MouseEvent) {
  nav?.classList.toggle('active');
  const button = event.currentTarget;

  if (button instanceof HTMLButtonElement && nav) {
    const isMenuActive = nav.classList.contains('active');
    button.setAttribute('aria-expanded', isMenuActive ? 'true' : 'false');
    button.setAttribute('aria-label', isMenuActive ? 'Fechar Menu' : 'Abrir Menu');
  }
}