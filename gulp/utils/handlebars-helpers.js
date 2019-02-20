const marked = require('marked');
const handlebars = require('handlebars');

require('handlebars-inline').register(handlebars)

handlebars.registerHelper('markdown', markdown => marked(markdown));
handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i));
handlebars.registerHelper('concat', (...args) => args.pop() && args.join(''))
handlebars.registerHelper('is-array', thing => Array.isArray(thing))
handlebars.registerHelper('repeat', (count, item) => Array(count + 1).join(item))
handlebars.registerHelper('json', data => JSON.stringify(data, null, 2))
handlebars.registerHelper('experience', data => new Experience(data))

function Experience(data) {
  if(typeof data === 'string') {
    this.isString = true
    this.value = data
  } else {
    const keys = Object.keys(data)
    if(keys.length != 1) throw new Error(`ArgumentError: data must have exactly one key. Got ${JSON.stringify(data, null, 2)}`)
    this.type = keys[0]
    this.value = data[this.type]
  }
}
