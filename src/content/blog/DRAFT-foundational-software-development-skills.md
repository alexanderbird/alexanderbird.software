
### Dealing with code as text files
- [Git Basics](https://git-scm.com/book/en/v1/Git-Basics)
- [Git merge
  conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
- full text search (`ack` / `grep -E` / `git grep -E`)
  - I couldn't find any good resources on this one.
  - The short version: learn to use [Ack](https://beyondgrep.com/), [Grep
    -E](https://www.gnu.org/software/grep/manual/grep.html), or [git grep
    -E](https://git-scm.com/docs/git-grep) to search the code base for classes,
    methods, etc.
  - e.g. `ack "FooBar.baz"` will find every time the static property `baz` on
    the class `FooBar` is accessed
  - e.g. `ack "\bfoo\("` will find every time `foo` is followed by a left
    parenthesis -- a rough approximation of when function `foo` is called.

### Dealing with the code as software
- Unit Testing
  - [Unit Testing
    Overview](https://www.vogella.com/tutorials/JUnit/article.html) (it's
    Java/JUnit specific, but there are equivalent concepts in any modern
    language)
  - [Writing your first unit
    tests](https://dzone.com/articles/writing-your-first-unit-tests)
  - Pitfalls: [First-Class
    Tests](https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html)
- Test Driven Development (TDD)
  - concepts: [The cycles of TDD (Bob
    Martin)](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)
  - compared with double entry bookkeeping in accounting:
    [The Sensitivity Problem (Bob Martin)](http://butunclebob.com/ArticleS.UncleBob.TheSensitivityProblem)
  - warm up -- choose some easy exercises from
    [exercism.io](https://exercism.io)
  - exercise 1 -- use unit tests written by someone else: [Name normalizer
    kata](https://github.com/jlangr/name-normalizer)
  - exercise 2 -- writing unit tests suggested by someone else: [x kata]()
  - exercise 3 -- deciding on your own which tests to write (with Java example):
    [Uncle Bob's Bowling Game
    Kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) (see
    linked PowerPoint)
- refactoring -- changing the structure without changing the behaviour
  - [Refactoring](https://refactoring.com/)
  - [Refactoring
    Malapropism](https://martinfowler.com/bliki/DefinitionOfRefactoring.html)
    (refactoring &sub; restructuring)
  - [Catalog of refactorings](https://refactoring.com/catalog/)



### Fitting in with the team
- matching code style, not do your own thing
- what tools does this project use?
