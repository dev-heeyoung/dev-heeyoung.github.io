'use strict';

// navbar
// make the navbar colored when scroll down
var navbar = document.querySelector('#navbar');
var navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--colored');
    } else {
        navbar.classList.remove('navbar--colored');
    }
})

// Handle scrolling when clicking on the navbar menu
var navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e) => {
    console.log(e.target.dataset.link);
    var target = e.target.dataset.link;
    if (target == null) {
        return null;
    }
    var element = document.querySelector(target);
    element.scrollIntoView({behavior: "smooth"});

})
