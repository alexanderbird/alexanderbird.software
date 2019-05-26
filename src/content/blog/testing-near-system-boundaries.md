Testing near system boundaries.

To support TDD -- you're writing tests while writing your code.

### Scenarios
 -  When you have a unit testing framework
   - UI
     - "Shows the correct data"
     - "Correctly responds to input"
     - "Looks right" [3]
   - Integration with external systems
     - When you don't know how the system behaves
     - When it's a familiar or very well documented system
 -  When you have no unit testing framework
   - Because there are none for the language/platform you're working on [1, 2]
   - Because someone else made the decision and you can't change it [2]


### Approaches

1. Write your own test framework in an afternoon
2. The manual approach
3. Approval testing
  a. Visual
  b. Ascii serialized

