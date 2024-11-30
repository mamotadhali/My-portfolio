let menuicon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
let section = document.querySelectorAll('section');
let navlist = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute; 
    })
}


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}