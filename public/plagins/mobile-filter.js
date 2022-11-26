const filterSpoilers = document.querySelectorAll("[data-spoiler='spoiler']");

filterSpoilers.forEach(el => {
    el.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('spoiler-show');
    });
});

const mobileFilterBtn = document.querySelector('.js-filter-btn');
const mobileFilter = document.querySelector('.js-filter');

mobileFilterBtn.addEventListener('click', () => {
    mobileFilter.classList.toggle('active');
});