const gulp = require('gulp');
require('require-dir')('./tasks')

gulp.task('default', gulp.series('clean', 'build'))

