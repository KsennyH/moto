const headers = document.querySelectorAll("[data-name='spoiler-title']");

module.exports = () => {
    headers.forEach(el => {
        el.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('footer-nav__spoiler');
        });
    });
}