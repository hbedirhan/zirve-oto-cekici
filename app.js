const toggleBtn = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

toggleBtn.addEventListener('click', () => {
    if (navbarNav.classList.contains('show')) {
        toggleBtn.setAttribute('aria-expanded', 'false');

        navbarNav.classList.remove('show');
        navbarNav.style.height = '';
    } else {
        toggleBtn.setAttribute('aria-expanded', 'true');
        
        navbarNav.classList.add('show');
        navbarNav.style.height = '160px';
    }
});
