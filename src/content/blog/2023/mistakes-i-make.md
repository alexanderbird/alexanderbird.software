I'm calling these "mistakes", but that's maybe the wrong word. It's often wise
to build something simple and only complicate it when we have proof that we need
to do more. Sometimes, these things look like mistakes when we reflect back, but
they were the strategically correct decisions to make at the time. 

### ⭐ Same Thing Everywhere

There is some important logic that exists in three or more places. 
The repeated logic represents the same real world concept so if it's
changed in one place, the other places must also change. This does not apply to
every instance of duplicated code; sometimes different business rules end up
being encoded in the same way even though they represent different ideas and
they change independently. This mistake relates to duplication of code where all
duplicated instances must change if any of them are changed.

#### Cause

I optimize for short-term productivity by choosing to copy+paste insted of
extracting something reusable. Although it can be wise to copy+paste the first time
I reuse something if I'm not entirely sure how often I would reuse it or what
interface it should have, the cost-benefit changes when I copy+paste
for the 3rd, 4th, 5th+ time.

#### How I notice I've made the mistake

I want to change something, but I'll have to make the change in several places.
It was supposed to be an easy change but it's looking like it'll be pretty
complicated. 

#### Just-in-time solution

When I notice I've made the mistake, I **extract a reusable component**:

1. take one instance of the thing, and extract it.
    - and confirm that everything still works right
    - and `git commit`
2. find the second instance of the thing, and use the extracted version.
    - if it doesn't work perfectly, make the extracted version more generic so
      both call sites work
    - and confirm that everything still works right
    - and `git commit`
3. repeat until all copy+pasted instances use the appropriately generic version
    - and verify + `git commit` after each step
    - if any change makes a big mess, `git reset` back to the last good step and
      try again (and maybe try a smaller step this time)
4. finally, make the change that started this whole investigation. That change
   should be in a separated git commit, and should (very satisfyingly) be a
   small change impacting only the single extracted version of the thing.

### ⭐ Thing Too Big

A unit of code (file, class, etc.) handles so many different cases/situations
that a human mind can't easily predict how the thing will behave in a certain
situation.

#### Cause

I optimize for short-term productivity by choosing to add new stuff to an
existing thing instead of making a second thing. It takes less imagination to
jam more logic into an existing thing than to create a second thing. 

#### How I notice I've made the mistake

I need to change the Big Thing but...

1. I have to read a lot of irrelevant code before I can safely make my change
2. My change has weird consequences -- I accidentally break several other parts
   of the Big Thing by making my change

#### Just-in-time solution

When I notice I've made the mistake, I **decompose the Big Thing**. I got into
this situation because I skipped the imagination step. It's time to reflect
about what is this Big Thing?  I start to identify sensible chunks of it, and
extract them one by one (with a full verification and commit step after each
extraction). Once I'm feeling like the Big Thing is just an appropriately sized
thing, then I proceed with the change that started this whole investigation.
That change should be a satisfyingly small git diff because the Big Thing is now
many small, well factored things that are easy to change in the ways that I need
to change them.

### ⭐ Thing Too Spread Out

One real world concept is modelled by three or more different units (classes,
files, etc.). Any time I want to understand or change the model for that real
world thing, I'll have to understand all of those 3+ components and how they
interact.

#### Cause

I tried to make something "easy to change" without getting specific about what
sorts of changes I would have to make. I didn't use TDD or domain modelling to
understand the natural or appropriate boundaries around logic; I coded and split
stuff up often (becuse big is bad) but I didn't do much critical thinking about
what is a suitable place to split things up. I could have started with everything
together and split things apart after learning from the prototype. Or, I could
have carefully modelled the business domain that I'm working in so that I've
put things that change together in one place and things that change
independently in different places. (That's a hard task, because it requires
guessing at what changes we'll need to make in the future -- we rarely have
accurate foresight about that.)

#### How I notice I've made the mistake

When I go to make a change, it feels like I'm reverse engineering a chain or
tree of dependencies between components. I think to myself: "why do I have to
touch so many files to make this simple change?"

#### Just-in-time solution

First, I ask myself if the change I'm making is an uncommon change. If I don't
expect that I or anyone else will have to make this change again for one or more
years, then it's probably OK that the change is complicated, and I'll leave the
working system alone. However, if I'm making a common change that I or others
will be repeating regularly moving forward, then I'd like to make it easier to
make this sort of change.

1. I map out the components that I would have to change if I didn't restructure
   the code. I may use a block diagram for this.
2. If all of those components can be combined into one or two files with each
   file having a small interface, a small comprehensive set of unit tests, and a
   total of under 300 lines of code, then I just jam them all together into one
   thing and call it done.
3. If I can't just jam it together, then I'll have to do some more design
   thinking. The problem is that the abstractions in the code are the wrong
   ones, so:
   1. I imagine combining all the affected components together into one Big
      Thing. The block diagram I did in the first step helps with this.
   2. I describe what that Big Thing does in terms that a non-programmer
      domain expert would understand. 
   3. I imagine a code structure that would look like my non-programmer-friendly
      description of the code
   4. I apply refactoring patterns to change the current structure to the target
      structure.
4. Once I have my target structure and my refactoring plan, I begin work
   1. I check for test coverage. Which tests do I need to run to confirm that
      the behaviour of the system is unchanged? If there's no automated
      coverage, then I add missing coverage or come up with an easily repeatable
      manual test I can do. (Usually I would choose to add automated test
      coverage, but if the manual check is quick and easy and the new automated
      test would be irrelevant after the refactoring, I may choose the manual
      test -- but that's an uncommon situation.)
   2. Starting with the first step in the refactoring plan, I refactor, verify,
      and `git commit`.
   3. I proceed until the plan is complete.

#### Remarks

I find it's much harder to recover from having the wrong abstractions than from
having a Big Thing that needs splitting. When everything is jammed into one Big
Thing, it's obvious that there's a problem and it doesn't take much reverse
engineering to put the pieces together. On the other hand, when the thing is Too
Spread Out, we tend to ignore it for longer. The units are small; it appears to
be well factored. The problem goes unnoticed for longer, and at that point the
recovery is more expensive (sometimes 2-5 days of testing and refactoring).





