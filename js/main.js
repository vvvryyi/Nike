document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');
    const navButtons = document.querySelector('.nav__buttons');
    const navLogo = document.querySelector('.nav__logo');
    // Функция закрытия меню
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navLogo.classList.remove('active');
        navButtons.classList.remove('active');
    }

    // Открытие/закрытие меню при клике на гамбургер
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLogo.classList.toggle('active');
        navButtons.classList.toggle('active');
    });

    // Закрытие при клике на ссылки
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Закрытие при клике на кнопки
    navButtons.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', closeMenu);
    });

    navLogo.addEventListener('click', closeMenu);

});
