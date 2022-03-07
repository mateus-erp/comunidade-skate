const cabecalho__menu = document.querySelector(".cabecalho__menu");
const menu_lateral = document.querySelector(".menu-lateral");

cabecalho__menu.addEventListener("click", (event) => {
    menu_lateral.classList.toggle('menu-lateral--ativo');
});