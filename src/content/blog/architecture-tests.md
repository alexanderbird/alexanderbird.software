How do you communicate high level architecture to your team? Do you have 
block diagrams on confluence? Ascii art in a README? Is there an onboarding
session when a new team member joins?

How do you ensure the architecture is respected?

Automated architecture tests are a way to communicate architectural rules
(and the intent behind them).

## Approach
There are more sophisticated approaches to this that involve actually
parsing your code and navigating the AST, but for basic rules a full-text
search approach can do the work -- and is simpler to grok if you're rolling
your own.

The idea is to search the code for infractions, and if any are found, fail the
test with the file and line number of the infraction, along with an explanation
of the architectural rule in question. This may include a link to your internal
wiki explaining in more detail.

## Simple Example: forbidden words
For example, your team has decided to use `*API` instead of `*Api`. Consequently,
your code has `fooAPI`, `barApi`, etc.. You can go back and correct all the occurances
of `*Api`, but how do you keep it from creeping in again?

### Binding to shell functions
We'll be working with command line tools to do the text search, and you'll need the
results in your test. There are several options for doing this in Node, but
[child_process.exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) is a simple one. 

    const { exec } = require('child_process')
    const { promisify } = require('util')
    promisify(exec)('ls').then(result => {
      console.log(result)
    })

### Finding offending files
So now what command will give us the list of files? [Stack Overflow question](https://stackoverflow.com/q/6153152/3012550)

But we don't want to search inside `node_modules`, or our project's build folder, etc.
...actually everything in `.gitignore` should be skipped.

[git grep](https://git-scm.com/docs/git-grep) does the trick. (See also [git ls-files -x](https://git-scm.com/docs/git-ls-files) for listing files)

`git grep --line-number -e ".*Api"` would return something like:

    src/foo/bar.js:14:    const response = await fooApi.get('/')
    src/quuz/baz.js:14:    await fooApi.post('/create', payload)

We'd like if it returned empty results -- there shouldn't be any files matching `.*Api`.

### Passing or failing the tests
Using `child_process.exec` we get the output of the command as a string. Your test could look something like

    const matchedLines = result.trim().split('\n')
    if(matchedLines.length) {
      throw new Error(`Architecture test failed: ${matchedLines.length} files contain *Api`)
    }

### Printing a useful error
It's not enough to detect it, though: the goal was to communicate architectural intent; to teach
new team members the why. Also if you don't print the file names how can we fix the error?

You could do something like:

    const matchedLines = result.trim().split('\n')
    const offendingFiles = matchedLines.map(line => {
      // e.g. " src/foo/bar.js:14:    const response = await fooApi.get('/')"
      const [file, line] = line.split(':')
      return `${file} on line ${line}`
    })

    if(offendingFiles.length) {
      throw new Error(`
        Architectural rule: use *API not *Api.
        The following files use *Api
        ${offendingFiles.map(line => `  - ${line}`)}

        Read more: http://our-internal-wiki/architecture/naming
      `)
    }

Which would fail with:

        Architectural rule: use *API not *Api.
        The following files use *Api
          - src/foo/bar.js on line 14
          - src/quuz/baz.js on line 14

        Read more: http://our-internal-wiki/architecture/naming


## Next Steps
### Import Rules
For example, folder `foo` may import from folder `bar`, but not the other way around.
  
  - Update your `git-grep` to only search in `src/bar`
  - Update your regex to match `require(.*/bar/.*)`


## Next Steps
It would be really nice to have a node package that does this for you -- where you define
your architecture rules like:

    const architectureTests = require('architecture-tests');
    describe('Architecture rules', () => {
      it('uses API not Api', () => {
        architectureTests.entireProject.neverHas(/.*Api/, `
          Use proper casing.

          Read more: http://our-internal-wiki/architecture/naming
        `)
      })

      it('does not import foo from bar', () => {
        architectureTests.folder('src/bar').neverHas(/require\(.*/bar/.*\)/, `
          Bar module cannot import Foo.
          
          Consider adding to Quux, which etc. etc.

        `)
      }
    })
