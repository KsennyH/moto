const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');


const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
        .pipe(plumber())
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

module.exports = js;