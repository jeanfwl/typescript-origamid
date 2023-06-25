// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
var btnMobile = document.getElementById('btn-mobile');
var nav = document.getElementById('nav');
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener('click', toggleMenu);
function toggleMenu(event) {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
    var button = event.currentTarget;
    if (button instanceof HTMLButtonElement && nav) {
        var isMenuActive = nav.classList.contains('active');
        button.setAttribute('aria-expanded', isMenuActive ? 'true' : 'false');
        button.setAttribute('aria-label', isMenuActive ? 'Fechar Menu' : 'Abrir Menu');
    }
}
