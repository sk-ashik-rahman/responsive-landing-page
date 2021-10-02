const hamburger = document.getElementById('burger')
hamburger.addEventListener( 'click', function(e) {
const ul = document.querySelector('nav > ul');
ul.classList.toggle('menu-slide');
burger.classList.toggle('cross')
});
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}