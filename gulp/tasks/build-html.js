const fs = require('fs');
const gulp = require('gulp');
const gulpJsonHandlebars = require('gulp-json-handlebars');
const gulpHtmlHandlebars = require('gulp-handlebars-html')();
const concat = require('gulp-concat');
const wrap = require('gulp-wrap');
const extensionReplace = require('gulp-ext-replace');
const path = require('path');
const yaml = require('gulp-yaml');
const jsonRefs = require('gulp-json-refs');
const filter = require('gulp-filter');
const del = require('del');

require('../utils/handlebars-helpers')

const {
  buildDirectory,
  sourceDirectory,
  sourceContentDirectory,
  handlebars: handlebarsOptions,
  tmpContentDirectory,
  pageTemplateDirectory
} = require('../config')


gulp.task('clean:yaml', () => del(tmpContentDirectory))

// This should really be part of build:html
// Except gulp-json-refs seems to not work when it's piped
// content from `yaml()` instead of from `src()`
gulp.task('build:yaml', () => gulp
  .src(`${sourceContentDirectory}/**/*.yaml`)
  .pipe(yaml())
  .pipe(gulp.dest(tmpContentDirectory))
);

gulp.task('build:handlebars', () => gulp
  .src(`${tmpContentDirectory}/**/*.json`)
  .pipe(jsonRefs())
  .pipe(filter(['**/*', '!**/_*.json']))
  .pipe(gulpJsonHandlebars(Object.assign({}, handlebarsOptions, { preProcessData }), getPageTemplate))
  .pipe(extensionReplace('.html'))
  .pipe(gulp.dest(buildDirectory))
);

gulp.task('build:html', gulp.series(
  'clean:yaml',
  'build:yaml',
  'build:handlebars'
));

// returns handlebars template given a template name
// the template name comes from meta.pageTemplate property in the json file
const getPageTemplate = pageTemplateName => {
  const templatePath = path.join(pageTemplateDirectory, pageTemplateName + '.hbs');
  return fs.readFileSync(templatePath).toString('utf-8');
};

const preProcessData = (data, file) => {
  const markdownFile = path.join(sourceContentDirectory, file).replace(/\.json$/, '.md')
  try {
    data.content = fs.readFileSync(markdownFile).toString()
  } catch(e) {
    // meh 
  }
  return data
}

