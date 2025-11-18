document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const menuButton = document.getElementById('menu-button');
    const menuClose = document.getElementById('menu-close');

    function toggleMenu() {
        header.classList.toggle('is-open');
        const isExpanded = header.classList.contains('is-open');
        menuButton.setAttribute('aria-expanded', isExpanded);
    }

    menuButton.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);
});