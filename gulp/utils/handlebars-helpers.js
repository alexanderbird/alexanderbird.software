const marked = require('marked');
const handlebars = require('handlebars');

require('handlebars-inline').register(handlebars)

handlebars.registerHelper('markdown', markdown => marked(markdown));
handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i));
handlebars.registerHelper('concat', (...args) => args.pop() && args.join(''))
handlebars.registerHelper('is-array', thing => Array.isArray(thing))
