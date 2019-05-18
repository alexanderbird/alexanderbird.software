module.exports = class Experience {
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
