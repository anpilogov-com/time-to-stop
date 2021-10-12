const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const svgo = require("gulp-svgo");

gulp.task("scss", () => {
   return gulp
      .src("./styles/scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./styles/css/"));
});

gulp.task("svgo", () => {
   return gulp
      .src("./images/*.svg")
      .pipe(svgo())
      .pipe(gulp.dest("./images/opt/"));
});

gulp.task("watcher", () => {
   gulp.watch("./styles/scss/", gulp.series("scss"));
});
