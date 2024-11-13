document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav3 ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active'); 
    });
});
