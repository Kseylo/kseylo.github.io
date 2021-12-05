const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

function prefix() {
  return gulp
    .src("./css/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css/"));
}

function clean() {
  return gulp
    .src("./css/style.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./css/"));
}

exports.clean = clean;
exports.style = style;
exports.watch = watch;
exports.prefix = prefix;
