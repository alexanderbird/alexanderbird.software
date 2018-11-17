const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const {sourceDirectory, buildDirectory} = require('../config');

gulp.task('build:css', () =>
  gulp
    .src(`${sourceDirectory}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('site.css'))
    .pipe(gulp.dest(buildDirectory)),
);
