const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const {sourceDirectory, buildDirectory} = require('../config');

gulp.task('build:css', () =>
  gulp
    .src(`${sourceDirectory}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('site.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(buildDirectory)),
);
