const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины


const plagins = () => {
    return src(path.plagins.src)
        .pipe(dest(path.plagins.dest))
}

module.exports = plagins;