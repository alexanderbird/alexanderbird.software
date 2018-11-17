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

const { buildDirectory, sourceDirectory, handlebars: handlebarsOptions } = require('../config')

gulp.task('build:html', () => gulp
  .src(`${sourceDirectory}/content/**/*.html.yaml`)
  .pipe(yaml())
  .pipe(gulpJsonHandlebars(handlebarsOptions, getPageTemplate))
  .pipe(concat('index.html'))
  .pipe(wrap({ src: path.join(sourceDirectory, 'index.html.hbs') }))
  .pipe(gulpHtmlHandlebars({}, { partialsDirectory: [handlebarsOptions.partialsDirectory] }))
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
