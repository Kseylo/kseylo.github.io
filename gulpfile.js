const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function style() {
  return gulp
    .src("./static/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./static/css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./static/scss/**/*.scss", style);
  gulp.watch("./templates/*.html").on("change", browserSync.reload);
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
exports.watch = watch;
exports.prefix = prefix;
