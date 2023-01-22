/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const mobileNav = __webpack_require__(/*! ./modules/mobile-nav */ \"./src/js/modules/mobile-nav.js\");\r\nconst mobileDropdown = __webpack_require__(/*! ./modules/mobile-dropdown */ \"./src/js/modules/mobile-dropdown.js\");\r\nconst slider = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\r\nconst spoiler = __webpack_require__(/*! ./modules/spoiler */ \"./src/js/modules/spoiler.js\");\r\n\r\nmobileNav();\r\nmobileDropdown();\r\nspoiler();\r\nslider();\n\n//# sourceURL=webpack://gulp-test/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/mobile-dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/modules/mobile-dropdown.js ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = () => {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        const mobileDropdown = document.querySelectorAll('.js-mobile-dropdown');\r\n        const mobileDropdownLinks = document.querySelectorAll('.mobile-navigation__link');\r\n    \r\n        mobileDropdownLinks.forEach(el => {\r\n            el.addEventListener('click', (e) => {\r\n                let currentMobileDropdownLink = e.currentTarget;\r\n                let currentMobileDropdown = currentMobileDropdownLink.closest('.mobile-navigation__item').querySelector('.js-mobile-dropdown');\r\n    \r\n    \r\n                mobileDropdown.forEach(el => {\r\n                    if (el !== currentMobileDropdown) {\r\n                        el.classList.remove('active');\r\n                    }\r\n                });\r\n    \r\n                currentMobileDropdown.classList.toggle('active');\r\n            });\r\n        });\r\n    \r\n        document.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.mobile-navigation__list')) {\r\n                mobileDropdown.forEach(el => {\r\n                    el.classList.remove('active');\r\n                });\r\n            }\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://gulp-test/./src/js/modules/mobile-dropdown.js?");

/***/ }),

/***/ "./src/js/modules/mobile-nav.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobile-nav.js ***!
  \**************************************/
/***/ (function(module) {

eval("const mobileNavButton = document.querySelector('.mobile-nav-button');\r\nconst mobileNav = document.querySelector('.mobile-navigation');\r\nconst mobileNavIcon = document.querySelector('.mobile-nav-button__icon');\r\n\r\nmodule.exports = () => {\r\n    mobileNavButton.addEventListener('click', () => {\r\n        mobileNavIcon.classList.toggle('active');\r\n        mobileNav.classList.toggle('active');\r\n        document.body.classList.toggle('no-scroll');\r\n    });\r\n}\n\n//# sourceURL=webpack://gulp-test/./src/js/modules/mobile-nav.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = () => {\r\n    new Swiper('.popular-products__slider', {\r\n        slidesPerView: 4,\r\n        spaceBetween: 30,\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev',\r\n        },\r\n        breakpoints: {\r\n            320: {\r\n                slidesPerView: 1,\r\n                spaceBetween: 0,\r\n            },\r\n            400: {\r\n                slidesPerView: 2,\r\n                spaceBetween: 10,\r\n            },\r\n            575: {\r\n                spaceBetween: 20,\r\n            },\r\n            654: {\r\n                slidesPerView: 3,\r\n                spaceBetween: 20,\r\n            },\r\n            992: {\r\n                slidesPerView: 4,\r\n                spaceBetween: 20,\r\n            }\r\n        }\r\n    }); \r\n}\n\n//# sourceURL=webpack://gulp-test/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/spoiler.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoiler.js ***!
  \***********************************/
/***/ (function(module) {

eval("const headers = document.querySelectorAll(\"[data-name='spoiler-title']\");\r\n\r\nmodule.exports = () => {\r\n    headers.forEach(el => {\r\n        el.addEventListener('click', function() {\r\n            this.nextElementSibling.classList.toggle('footer-nav__spoiler');\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://gulp-test/./src/js/modules/spoiler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;