const links = document.querySelectorAll('.link');

function ativarElement(element: HTMLElement) {
    element.style.border = '2px solid blue';
}

links.forEach(link => {
  if (link instanceof HTMLElement) {
    ativarElement(link);
  }
})