const del = require('del');
const gulp = require('gulp');

const { buildDirectory } = require('../config')

gulp.task('clean', () => del(buildDirectory));
