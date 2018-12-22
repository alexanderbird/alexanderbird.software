const gulp = require('gulp');
const {sourceAssetsDirectory, buildDirectory} = require('../config');

gulp.task('build:assets', () => gulp.src(`${sourceAssetsDirectory}/**/*`)
    .pipe(gulp.dest(`${buildDirectory}/assets`))
);

