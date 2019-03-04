const marked = require('marked');
const handlebars = require('handlebars');
const pluralize = require('pluralize');

require('handlebars-inline').register(handlebars)

handlebars.registerHelper('not', object => !object)
handlebars.registerHelper('markdown', markdown => marked(markdown))
handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i))
handlebars.registerHelper('concat', (...args) => args.pop() && args.join(''))
handlebars.registerHelper('is-array', thing => Array.isArray(thing))
handlebars.registerHelper('repeat', (count, item) => Array(count + 1).join(item))
handlebars.registerHelper('json', data => JSON.stringify(data, null, 2))
handlebars.registerHelper('experience', data => new Experience(data))
handlebars.registerHelper('pluralize', pluralize)

class Experience {
  constructor(data) {
    if(typeof data === 'string') {
      this.type = 'string'
      this.value = data
    } else {
      const keys = Object.keys(data)
      if(keys.length != 1) throw new Error(`ArgumentError: data must have exactly one key. Got ${JSON.stringify(data, null, 2)}`)
      this.type = keys[0]
      this.value = data[this.type]
    }

    if(this.isBox) {
      this.label = this.value.label
      delete this.value.label
    }
  }

  get isLine() {
    return this.type === 'line'
  }

  get isPlaceholder() {
    return this.type === 'empty'
  }

  get isString() {
    return this.type === 'string'
  }

  get isBox() {
    return this.type === 'box'
  }

  get isGroup() {
    return this.type === 'group'
  }

  get isConnection() {
    return this.type === 'connection'
  }
}
