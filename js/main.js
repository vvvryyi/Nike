document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');
    const navLogo = document.querySelector('.nav__logo')
    
    hamburger.addEventListener('click', function() {
        // Переключаем классы active для меню и гамбургера
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLogo.classList.toggle('active')
    });


});
