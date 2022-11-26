module.exports = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileDropdown = document.querySelectorAll('.js-mobile-dropdown');
        const mobileDropdownLinks = document.querySelectorAll('.mobile-navigation__link');
    
        mobileDropdownLinks.forEach(el => {
            el.addEventListener('click', (e) => {
                let currentMobileDropdownLink = e.currentTarget;
                let currentMobileDropdown = currentMobileDropdownLink.closest('.mobile-navigation__item').querySelector('.js-mobile-dropdown');
    
    
                mobileDropdown.forEach(el => {
                    if (el !== currentMobileDropdown) {
                        el.classList.remove('active');
                    }
                });
    
                currentMobileDropdown.classList.toggle('active');
            });
        });
    
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-navigation__list')) {
                mobileDropdown.forEach(el => {
                    el.classList.remove('active');
                });
            }
        });
    });
}