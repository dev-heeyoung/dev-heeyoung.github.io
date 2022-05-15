'use strict';

// navbar
// make the navbar colored when scroll down
var navbar = document.querySelector('#navbar');
var navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(`n: ${navbarHeight}`);
    console.log(`w: ${window.scrollY}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--colored');
    } else {
        navbar.classList.remove('navbar--colored');
    }
})


