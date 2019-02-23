const del = require('del');
const gulp = require('gulp');

const {
  buildDirectory,
  tmpRootDirectory,
} = require('../config')

gulp.task('clean:build', () => del(buildDirectory));
gulp.task('clean:tmp', () => del(tmpRootDirectory));
gulp.task('clean', gulp.parallel('clean:build', 'clean:tmp'))
