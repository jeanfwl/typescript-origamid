var links = document.querySelectorAll('.link');
function ativarElement(element) {
    if (element instanceof HTMLElement) {
        element.style.border = '2px solid blue';
    }
}
links.forEach(function (link) {
    ativarElement(link);
});
