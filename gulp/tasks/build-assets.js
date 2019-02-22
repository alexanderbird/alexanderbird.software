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

gulp.task('build:svg-icons', () => gulp.src(`${sourceIconsDirectory}/**/*.svg`)
    .pipe(svgSprite({ mode: { symbol: true } }))
    .pipe(rename({
      dirname: buildAssetsDirectory,
      basename: buildIconsBasename
    }))
    .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:raw-pages', () => gulp.src(`${sourceRawPagesDirectory}/*`)
    .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:assets', gulp.parallel('build:actual-assets', 'build:svg-icons', 'build:raw-pages'))
