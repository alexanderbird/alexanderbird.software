### Contents
 - [Git](#git)
 - [Unit Testing](#unit-testing)
 - [Test Driven Development (TDD)](#test-driven-development-tdd)
 - [Refactoring](#refactoring)
 - [Design Patterns](#design-patterns)
 - [Code Reading](#code-reading)
 - [Finding Code in the Code Base](#finding-code-in-the-code-base)

### Git
- [Git Basics](https://git-scm.com/book/en/v1/Git-Basics)
- [Git merge
  conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
- [Git workflow for open source projects](https://github.com/firstcontributions/first-contributions)
  - useful for your first time in any medium sized team and above

### Unit Testing
  - [Unit Testing
    Overview](https://www.vogella.com/tutorials/JUnit/article.html) (it's
    Java/JUnit specific, but there are equivalent concepts in any modern
    language)
  - [Writing your first unit
    tests](https://dzone.com/articles/writing-your-first-unit-tests)
  - Pitfalls: [First-Class
    Tests](https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html)
  - [Test
    Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
  - Test Doubles
    - [Test Doubles — Fakes, Mocks and Stubs](https://blog.pragmatists.com/test-doubles-fakes-mocks-and-stubs-1a7491dfa3da)
    - [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)

### Test Driven Development (TDD)
  - concepts: [The cycles of TDD (Bob
    Martin)](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)
  - compared with double entry bookkeeping in accounting:
    [The Sensitivity Problem (Bob Martin)](http://butunclebob.com/ArticleS.UncleBob.TheSensitivityProblem)
  - [TDD
    Antipatterns](http://agileinaflash.blogspot.com/2009/06/tdd-antipatterns.html)
  - Exercises
    - where the tests are written for you in advance (so it's not really TDD but
      can help to practice writing just enough code to pass one more test)
        - [exercism.io](https://exercism.io)
  - You don't have to decide which tests to write &mdash; the problem includes a
    list of tests to write in order: [Name normalizer
    kata](http://langrsoft.com/2019/05/13/tdd-katas-exercises-name-normalizer-3-5/)
  - deciding on your own which tests to write (with Java example, but you could
    do it in any language): [Uncle Bob's Bowling Game
    Kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) (see
    linked PowerPoint)

### Refactoring
Changing the code structure without changing the behaviour

  - [Refactoring](https://refactoring.com/)
  - [Refactoring
    Malapropism](https://martinfowler.com/bliki/DefinitionOfRefactoring.html)
    (refactoring &sub; restructuring)
  - [Catalog of refactorings](https://refactoring.com/catalog/)
  - Exercises:
     - With comprehensive tests: [Tennis Refactoring
       Kata](https://github.com/emilybache/Tennis-Refactoring-Kata)
     - With incomplete tests (need to use approval tests to quickly get full
       coverage) [Gilded Rose
       Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata)

### Design Patterns

  - [An introduction to the concept of design patterns](https://dev.to/powerwebdev/an-introduction-to-the-concept-of-design-patterns-o29)
  - [Design Patterns](https://sourcemaking.com/design_patterns)

### Code Reading

  - [How to quickly and effectively read other people’s code](https://selftaughtcoders.com/how-to-quickly-and-effectively-read-other-peoples-code/)
    - (I find the first half with code examples more helpful than the second
      half about chickens.) 
  - [How do you go about getting familiar with a code written by someone
    else?](https://www.quora.com/How-do-you-go-about-getting-familiar-with-a-code-written-by-someone-else/answer/Jeff-Langr?srid=RjMI)

### Finding Code in the Code Base
full text search (`ack` / `grep -E` / `git grep -E`)

  - I couldn't find any good resources on this one.
  - The short version: learn to use [Ack](https://beyondgrep.com/), [Grep
    -E](https://www.gnu.org/software/grep/manual/grep.html), or [git grep
    -E](https://git-scm.com/docs/git-grep) to search the code base for classes,
    methods, etc.
  - e.g. `ack "FooBar.baz"` will find every time the static property `baz` on
    the class `FooBar` is accessed
  - e.g. `ack "\bfoo\("` will find every time `foo` is followed by a left
    parenthesis -- a rough approximation of when function `foo` is called.

