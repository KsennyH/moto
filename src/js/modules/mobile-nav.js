const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNav = document.querySelector('.mobile-navigation');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');

module.exports = () => {
    mobileNavButton.addEventListener('click', () => {
        mobileNavIcon.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}