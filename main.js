'use strict';

// navbar
// make the navbar colored when scroll down
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--colored');
    } else {
        navbar.classList.remove('navbar--colored');
    }
})

// Handle scrolling when clicking on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e) => {
    const target = e.target.dataset.link;
    if (target == null) {
        return;
    }

    navbarMenu.classList.remove('open');
    
    const element = document.querySelector(target);
    element.scrollIntoView({behavior: "smooth"});
})

// navbar toggle button
const toggleBtn = document.querySelector('.navbar__toggle--btn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// Home
// Handle "contact me" button on home
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth"});
})

const home = document.querySelector('.home__set');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Arrow up button
const arrowUp = document.querySelector('#arrow');
const topWindow = document.querySelector('#home');
arrowUp.addEventListener('click', () => {
    topWindow.scrollIntoView({behavior: "smooth"});
})

// Projects
const categories = document.querySelector('.projects__categories');
const projectContainer = document.querySelector('.projects__des');
const projects = document.querySelectorAll('.project');

// filtering projects
categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
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

