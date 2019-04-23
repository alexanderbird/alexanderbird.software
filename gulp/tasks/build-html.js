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

require('../utils/handlebars-helpers')

const {
  buildDirectory,
  sourceDirectory,
  sourceContentDirectory,
  handlebars: handlebarsOptions,
  pageTemplateDirectory
} = require('../config')


gulp.task('build:content-1', () => gulp
  .src(`${sourceContentDirectory}/**/*.yaml`)
  .pipe(yaml())
  .pipe(gulp.dest('./whatever/1'))
);

gulp.task('build:content-2', () => gulp
  .src(`whatever/1/**/*.json`)
  .pipe(jsonRefs())
  .pipe(gulp.dest('./whatever/2'))
);

gulp.task('build:html', () => gulp
  .src([`whatever/2/**/*.json`, `!whatever/2/**/_*.json`])
  .pipe(gulpJsonHandlebars(Object.assign({}, handlebarsOptions, { preProcessData }), getPageTemplate))
  .pipe(extensionReplace('.html'))
  .pipe(gulp.dest(buildDirectory))
);

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

