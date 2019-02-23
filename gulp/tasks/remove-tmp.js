const del = require('del');
const gulp = require('gulp');

const { tmpRootDirectory } = require('../config')

gulp.task('remove:tmp', () => del(tmpRootDirectory));
