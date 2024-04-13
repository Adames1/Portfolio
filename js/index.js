// variables
const buttonMenu = document.querySelector('.btn__menu');
const menu = document.querySelector('.nav__list');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');

// abrir & cerrar menu
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
    header.classList.toggle('show');

    // convertir boton menu en icono para cerrar
    buttonMenu.classList.toggle('open');
});

// remover clases de cada elemento
navLinks.forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('show');
    header.classList.remove('show');

    // remover boton menu en icono para cerrar
    buttonMenu.classList.remove('open');
}));

// aplicar estilo a header con scroll
document.addEventListener('scroll', () => {

    if (scrollY >= 150) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});