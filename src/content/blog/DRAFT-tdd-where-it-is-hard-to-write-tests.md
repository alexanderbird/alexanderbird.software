The mechanics of TDD are relatively straightforward if:
 - your project has a unit test framework setup
 - you are writing a pure function with no dependencies

In the following scenarios it can be harder to unit test. These strategies can
make it possible to practice TDD in less-than-ideal testing scenarios.

### Scenarios
 - When you have a unit testing framework
   - UI
     - You're using a component-based UI framework that allows you to render
       individual components and interact with them (e.g. for web: React,
       Angular)
       - "Shows the correct data" [6]
       - "Correctly responds to input" [7]
     - "Looks right" [3]
   - Integration with external systems
     - When you don't know how the system behaves [4]
     - When it's a familiar or very well documented system [5]
 - When you have no unit testing framework
   - Because there are none for the language/platform you're working on [1, 2]
   - Because someone else made the decision and you can't change it [2]

### Approaches
1. Write your own test framework in an afternoon
2. The manual approach. (Maybe: Gherkin?)
3. Approval testing
  a. Visual
  b. Ascii serialized
4. Don't unit test. Get an interactive environment and play around. If you can't
   get it interactive, get the shortest possible feedback loop and play around.
   Once you know how it behaves, make some notes and delete your code. Then go
   to [5]
5. London style.
6. Render one component (mocking dependencies where necessary), select specific
   parts of the output, write assertions about their text content.
7. Simulate user input, then do [6].
