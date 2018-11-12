const gulp = require('gulp');
require('require-dir')('./tasks');

gulp.task('build', gulp.parallel('build:html', 'build:css'));
gulp.task('default', gulp.series('clean', 'build'));
