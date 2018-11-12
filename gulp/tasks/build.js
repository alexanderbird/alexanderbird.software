const fs = require('fs');
const gulp = require('gulp');
const gulpJsonHandlebars = require('gulp-json-handlebars');
const path = require('path');
const removeJsonFileNameSuffix = () => require('gulp-ext-replace')('');
const yaml = require('gulp-yaml');

const { buildDirectory, sourceDirectory, handlebars: handlebarsOptions } = require('../config')

gulp.task('build', () => gulp
  .src(`${sourceDirectory}/content/**/*.html.yaml`)
  .pipe(yaml())
  .pipe(gulpJsonHandlebars(handlebarsOptions, getPageTemplate))
  .pipe(removeJsonFileNameSuffix())
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
