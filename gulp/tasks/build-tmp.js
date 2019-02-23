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
  buildIconsBasename,
  tmpDirectory
} = require('../config')

gulp.task('build:tmp', () => gulp.src(`${sourceIconsDirectory}/**/*.svg`)
    .pipe(svgSprite({ mode: { symbol: true } }))
    .pipe(rename({
      dirname: '.',
      basename: buildIconsBasename
    }))
    .pipe(gulp.dest(tmpDirectory))
);
