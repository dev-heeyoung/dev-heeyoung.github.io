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
    var target = e.target.dataset.link;
    if (target == null) {
        return null;
    }
    var element = document.querySelector(target);
    element.scrollIntoView({behavior: "smooth"});

})

// Home
// Handle "contact me" button on home
var contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (e) => {
    var contact = document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth"});
})

var home = document.querySelector('.home__set');
var homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})
