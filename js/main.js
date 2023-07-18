const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navUl')

hamburger.addEventListener('click', openMenu)

function openMenu(){
    console.log('hi')
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
}