const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

const {sourceDirectory, buildDirectory} = require('../config');

gulp.task('build:css', () =>
  gulp
    .src(`${sourceDirectory}/**/*.scss`)
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat('site.css'))
    .pipe(gulp.dest(buildDirectory)),
);
