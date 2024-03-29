const handlebars = require('handlebars');
const pluralize = require('pluralize');
const markdown = require('./markdown');
const Experience = require('./models/experience.js');

handlebars.registerHelper('not', object => !object)
handlebars.registerHelper('markdown', markdown)
handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i))
handlebars.registerHelper('concat', (...args) => args.pop() && args.flat().join(''))
handlebars.registerHelper('concat-space', (...args) => args.pop() && args.flat().join(' '))
handlebars.registerHelper('is-array', thing => Array.isArray(thing))
handlebars.registerHelper('repeat', (count, item) => Array(count + 1).join(item))
handlebars.registerHelper('json', data => JSON.stringify(data, null, 2))
handlebars.registerHelper('experience', data => data && new Experience(data))
handlebars.registerHelper('pluralize', pluralize)
handlebars.registerHelper('kebab-case', string => string.replace(/ /g, '-').toLowerCase())
handlebars.registerHelper('html-unescape', string => string && string
  .replace(new RegExp('&amp;', 'g'), '&')
  .replace(new RegExp('&bull;', 'g'), '•'))

