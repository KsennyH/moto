!function(){var e={974:function(e){e.exports=()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".js-mobile-dropdown");document.querySelectorAll(".mobile-navigation__link").forEach((t=>{t.addEventListener("click",(t=>{let o=t.currentTarget.closest(".mobile-navigation__item").querySelector(".js-mobile-dropdown");e.forEach((e=>{e!==o&&e.classList.remove("active")})),o.classList.toggle("active")}))})),document.addEventListener("click",(t=>{t.target.closest(".mobile-navigation__list")||e.forEach((e=>{e.classList.remove("active")}))}))}))}},642:function(e){const t=document.querySelector(".mobile-nav-button"),o=document.querySelector(".mobile-navigation"),n=document.querySelector(".mobile-nav-button__icon");e.exports=()=>{t.addEventListener("click",(()=>{n.classList.toggle("active"),o.classList.toggle("active"),document.body.classList.toggle("no-scroll")}))}},459:function(e){e.exports=()=>{new Swiper(".popular-products__slider",{slidesPerView:4,spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:0},400:{slidesPerView:2,spaceBetween:10},575:{spaceBetween:20},654:{slidesPerView:3,spaceBetween:20},992:{slidesPerView:4,spaceBetween:20}}})}},329:function(e){const t=document.querySelectorAll("[data-name='spoiler-title']");e.exports=()=>{t.forEach((e=>{e.addEventListener("click",(function(){this.nextElementSibling.classList.toggle("footer-nav__spoiler")}))}))}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}!function(){const e=o(642),t=o(974),n=o(459),i=o(329);e(),t(),i(),n()}()}();