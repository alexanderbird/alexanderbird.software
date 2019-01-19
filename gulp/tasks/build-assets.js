const gulp = require('gulp');
const {sourceAssetsDirectory, sourceRawPagesDirectory, buildDirectory} = require('../config');

gulp.task('build:actual-assets', () => gulp.src(`${sourceAssetsDirectory}/**/*`)
    .pipe(gulp.dest(`${buildDirectory}/assets`))
);

gulp.task('build:raw-pages', () => gulp.src(`${sourceRawPagesDirectory}/*`)
    .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:assets', gulp.parallel('build:actual-assets', 'build:raw-pages'))
