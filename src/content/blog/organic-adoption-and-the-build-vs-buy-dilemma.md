### The Build vs Buy Dilemma

- in the *build* camp:
  - use simple tools
  - write code that's easy for folks to learn
  - I'll spend just as long configuring as I would writing it myself
  - you have to keep the off the shelf component up to date
  - what if they stop maintaining it?
- in the *buy* camp (and note, I'm saying "buy" but often these components are
  free off the shelf software libraries)
  - don't reinvent the wheel
  - you would have forgotten important edge cases if you rolled your own
  - you don't have to pay for maintenance of the off the shelf component
  - your use cases may be simple now, but they'll get more complicated later and
    then you'll regret not having this full-featured off the shelf component

### It Depends, Of Course

Of course, the answer depends on your circumstance. All of the issues listed
above, and many more, come into play. Sometimes you can do analysis and come to
an answer. Sometimes you use your instincts because who even knows? In every
decision, you're making a bet about what the future of your software will be.

### For the sake of the argument...

I'd like to explore how the concept of "evolvability" plays into this decision.
For the sake of the argument, suppose you have two alternatives: **build** and
**buy**. Here are some simplifying assumptions:

 - the price and license of the **bought** option is insignificant
 - the time to **build** is equal to the time to learn and configure the **bought**
   option
 - you are very confident that both **build** and **buy** would satisfy your
   needs for years to come -- neither is functionally preferable
 - the maintenance effort for both options is the same
 - in every other conceivable way, the end state for both options is equivalent

### How Does The New Thing Come To Be?

Since we're pretending both options are identical once they're established,
we'll look at how the processes for establishing the two options differ.

#### Big Bang vs Iterative

In the **buy** option, the off the shelf component does everything that you need
it to do. As soon as it's plugged in, everything works and we're done. But...
how do you plug it in? Reading docs, looking at examples and tutorials, trial
and error, experimenting. Throughout that process, you have nothing to show for
it. If anyone else is working on other parts of the software at the same time,
you may not be able to integrate and merge your work, because it still doesn't
work. After a long time of saying "yes, it should be done very soon", you finish
and merge.

By contrast, in the **build** option, you can iterate like you would on regular
feature work. You take a small step towards it, and you merge. It's
demonstrable, and other folks can start using it. Then you improve it more, and
merge, and other folks can start using it. This continues until it's good enough
to call it done for now.

#### Organic Adoption

One difference between **build** and **buy** is that you can have functional,
integrable steps towards the **built** option, but the **buy** option is a big
bang. This means you can slowly adopt the **build** option.

#### Quitting

The trouble with a big bang is that you need to know if it's worth it before you
start. The bigger the bet ("I'd like to spend a week integrating with component
X"), the more confidence you need that it's worthwhile. In the case of
integrating something new, that means we do analysis instead of building a small
first step. On the other hand, if the first step is small enough, you can do it
without asking anyone or postponing any other work, and then decide if it's
worth continuing or if you should quit.

##### When it doesn't matter

If this is to support the next most important customer facing functionality,
then the bigger bet is no problem: "we need to do X, we believe this off the
shelf component is the best way to do it, let's begin". However, **if you're
debating build vs buy for an experimental improvement, it's helpful to get
feedback before you commit to the full cost**. In the build option, you can
build a little, try it out, show it off, reflect on it, and decide if you want
to continue. 1/10th of the custom build is demonstrable, but 1/10th of
configuring an off the shelf component is often not demonstrable.

### The Organic Adoption Principle

Given two alternatives, the one that can be split into smaller demonstrable
steps is less risk. For experimental improvements that you don't yet know the
payoff for, it is advantageous to pick the alternative that can be split into
steps so it's easy to quit (and so, it's easy to start). When the options are
building with the tools you have or introducing a new tool or component, often
the build-it-yourself approach is easier to split into small demonstrable steps
-- and so, it offers a tactical advantage.

#### Disclaimer

Good tactics are useless without good strategy. If the off the shelf component
is the right solution, and you know this is the right problem to solve, then go
for it! 
