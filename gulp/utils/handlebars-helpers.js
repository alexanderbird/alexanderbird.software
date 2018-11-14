const handlebars = require('handlebars');
require('handlebars-inline').register(handlebars)

handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i));
handlebars.registerHelper('concat', (...args) => args.pop() && args.join(''))
