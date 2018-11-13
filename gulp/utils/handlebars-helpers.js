const handlebars = require('handlebars');

handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i));
