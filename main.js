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
        return;
    }

    var element = document.querySelector(target);
    element.scrollIntoView({behavior: "smooth"});
})

// Home
// Handle "contact me" button on home
var contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    var contact = document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth"});
})

var home = document.querySelector('.home__set');
var homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Arrow up button
var arrowUp = document.querySelector('#arrow');
var topWindow = document.querySelector('#home');
arrowUp.addEventListener('click', () => {
    topWindow.scrollIntoView({behavior: "smooth"});
})

// Projects
var categories = document.querySelector('.projects__categories');
var projectContainer = document.querySelector('.projects__des');
var projects = document.querySelectorAll('.project');

// filtering projects
categories.addEventListener('click', (e) => {
    var filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }

    const selected = document.querySelector('.category__btn.selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    selected.classList.remove('selected');
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');    

    setTimeout(() => {
        projects.forEach((project) => {
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');  
    }, 300);
})

