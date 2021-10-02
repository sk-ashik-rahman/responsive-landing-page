const hamburger = document.getElementById('burger')
hamburger.addEventListener( 'click', function(e) {
const ul = document.querySelector('nav > ul');
ul.classList.toggle('menu-slide');
burger.classList.toggle('cross')
});
