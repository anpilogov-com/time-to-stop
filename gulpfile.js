"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const svgo = require("gulp-svgo");

let pathsSrc = {
  imges: "./images/*/**.svg",
  styles: "./styles/scss/*/**.scss",
  watchImges: "./images",
  watchStyles: "./styles/scss",
};

let pathsDest = {
  imges: "./images/opt",
  styles: "./styles/css",
};

gulp.task("scss", () => {
  return gulp
    .src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathsDest.styles));
});

gulp.task("svgo", () => {
  return gulp.src(paths.imges).pipe(svgo()).pipe(gulp.dest(pathsDest.imges));
});

gulp.task("watcher", () => {
  gulp.watch(pathsSrc.watchStyles, gulp.series("scss"));
  gulp.watch(pathsSrc.watchImges, gulp.series("svgo"));
});

gulp.task("def", gulp.series("watcher", "scss", "svgo"));
