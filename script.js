const hamburgerContainer = document.querySelector('.nav--links');
const hamburger = document.querySelector('.nav--hamburger');
const links = document.querySelectorAll('.nav--links li');

hamburger.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('clicked');
    links.forEach((link) => {
        link.classList.toggle('fade');
    })
})