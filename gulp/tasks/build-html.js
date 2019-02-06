const fs = require('fs');
const gulp = require('gulp');
const gulpJsonHandlebars = require('gulp-json-handlebars');
const gulpHtmlHandlebars = require('gulp-handlebars-html')();
const concat = require('gulp-concat');
const wrap = require('gulp-wrap');
const extensionReplace = require('gulp-ext-replace');
const path = require('path');
const yaml = require('gulp-yaml');

require('../utils/handlebars-helpers')

const { buildDirectory, sourceDirectory, sourceContentDirectory, handlebars: handlebarsOptions } = require('../config')

gulp.task('build:html', () => gulp
  // Ensure home.html.yaml is the last one src'ed
  .src(`${sourceContentDirectory}/**/*.yaml`)
  .pipe(yaml())
  .pipe(gulpJsonHandlebars(handlebarsOptions, getPageTemplate))
  .pipe(extensionReplace('.html'))
  .pipe(gulp.dest(buildDirectory))
);

// returns handlebars template given a template name
// the template name comes from meta.pageTemplate property in the json file
const getPageTemplate = pageTemplateName => {
  const templatePath = path.join(
    handlebarsOptions.partialsDirectory,
    'pages',
    pageTemplateName + '.hbs',
  );
  return fs.readFileSync(templatePath).toString('utf-8');
};
