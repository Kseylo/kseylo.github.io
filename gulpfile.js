const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

function style() {
  return gulp
    .src("./static/scss/style.scss")
    .pipe(sass())
    // .pipe(rename("about.css"))
    .pipe(gulp.dest("./static/css"))
}

function prefix() {
  return gulp
    .src("./static/css/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./static/css/"));
}

function clean() {
  return gulp
    .src("./static/css/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./static/css/"));
}


exports.clean = clean;
exports.style = style;
exports.prefix = prefix;
