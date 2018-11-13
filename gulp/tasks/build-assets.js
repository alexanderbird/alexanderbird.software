const gulp = require('gulp');
const {sourceDirectory, buildDirectory} = require('../config');

gulp.task('build:assets', () => gulp.src(`${sourceDirectory}/assets/**/*`)
    .pipe(gulp.dest(`${buildDirectory}/assets`))
);

