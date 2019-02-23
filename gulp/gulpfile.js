const gulp = require('gulp');
require('require-dir')('./tasks');

gulp.task('build', gulp.parallel(
  'build:assets',
  'build:html',
  'build:css'
));

gulp.task('default', gulp.series('clean', 'build:tmp', 'build', 'remove:tmp'));
