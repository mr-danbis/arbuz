const fixedHeaderWhenScrolling = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

const openCloseSidebar = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const sidebar = document.querySelector('.sidebar');

    const toggleScroll = (isOpen) => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    burgerBtn.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('sidebar--open');
        burgerBtn.classList.toggle('header__burger--open');
        toggleScroll(isOpen);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
        fixedHeaderWhenScrolling();
    });

    openCloseSidebar();
});