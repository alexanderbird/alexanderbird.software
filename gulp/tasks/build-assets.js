const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const rename = require('gulp-rename')
const path = require('path')
const {
  sourceAssetsDirectory,
  sourceIconsDirectory,
  sourceRawPagesDirectory,
  buildDirectory,
  buildAssetsDirectory,
  buildIconsBasename
} = require('../config')

gulp.task('build:actual-assets', () => gulp.src(`${sourceAssetsDirectory}/**/*`)
    .pipe(gulp.dest(path.join(buildDirectory, buildAssetsDirectory)))
);

gulp.task('build:raw-pages', () => gulp.src(`${sourceRawPagesDirectory}/*`)
    .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:assets', gulp.parallel('build:actual-assets', 'build:raw-pages'))
