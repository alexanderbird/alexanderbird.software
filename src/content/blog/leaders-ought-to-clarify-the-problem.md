In my experience, software work can be split into a few broad categories:

- problem is understood, solution is understood (let's call this "implementation
  work")
- problem is understood, solution is ambiguous (let's call this "design work")
- problem is ambiguous (let's call this "ambiguous work")

In general, folks covet the design work (it's fun, interesting, high impact, and
looks great on a resume). There tends to be lots of implementation work. The
ambiguous work is easy to neglect ("nobody pulled that work this sprint, again")
and easy to excuse ("we started on that thing, but ran into this obstacle so
we're blocked again").

I have seen groups of developers (I intentionally avoid the word "team" here)
where the most senior members take the interesting design work. They let
everyone else do the implementation work, and they do the bare minimum on the
ambiguous work (just enough to show that they're making progress on it, not
enough to see it through to completion).

I have found that a team is significantly more productive (and has more fun) if
the most senior folks abstain from the coveted design work and instead create an
environment where junior folks can safely and effectively complete design work.
In Netflix's book *No Rules Rules* they call this "Lead with context, not
control".

### How a leader can enable inexperienced team members to do interesting desing

#### 1. Clarify risky design tasks

For risky design, redefine the problem so it's safe for someone inexperienced to complete.

Usually, it's possible to make a minor change to the problem statement so that any
unsafe solutions are obviously invalid. For example: suppose your team mate has
no experience evaluating open source licenses but the design task is to choose a
library to meet a certain need. You can make it safe for them to do the work by
clarifying at the start "the library must comply with our company's open source
software policy. I don't know where it's written down, but I or someone else on
the team can help you find that if you don't know where to find it". Or, if
you're at a small company with no open source policy, then: "we need to be
careful to choose a library with an appropriate license. I don't have a full
list of acceptable licenses. Any solution must include a justification for why
the license is appropriate for our company -- and let's have Jenny the Business
Leader review that license justification". With a clarification like that, you
can safely go on vacation and trust that the task will be completed safely. You
don't need to micromanage the design by reviewing every alternative and helping
choose one; you've created an environment where the inexperienced team member
can safely make a choice.

#### 2. Automate and optimize the implementation work

In the context of this blog post, implementation work refers to work that has a
well defined solution. It's boring for builders to assemble something with a
well defined solution. We want to invent. We want to innovate! But that's not
just a selfish motivation; boring work is bad for business. If we could design a
solution and have it instantaneously implemented, that would be just as valuable
to a customer as one that takes months or years to implement. Actually, the one
that's instantaneously implemented is *more* valuable because it's available
sooner. So not only is boring work bad for builders (because we don't like being
bored), it's bad for customers (because it delays the stuff they want from the
business). It's bad for business to have unhappy builders and impatient
customers. So nobody is helped by boring work.

Although implementation work is necessary, there's no benefit to having it take
so long. Rather than having junior folks handle the boring implementation work,
technical leaders should participate in the boring work and find opportunities
to automate and optimize the work. If it normally takes two days, is there
something simple we can change that will make it take one day? Sometimes these
optimizations are architectural or tooling related. Other times, the
optimization is related to training: if the junior team member knew how to use
a certain technique they could complete the work in half the time. So let's take
a few days and learn that technique so everyone can complete the boring work
faster.

#### 3. Convert ambiguous work into design work or implementation work

Be the first to take on the frustrating/ambiguous work which we agree is
important but which nobody can summarize. This is the work with vague problem
statements. Here are some examples:
 - "we're getting one or two support tickets per week related to missing data in
   the Quux report, but we've made two attempts to reproduce it without luck". 
 - "our business leader would like our system to interoperate with the third
   party tool BazWizard to unlock a new customer segment, but nobody on our team
   is familiar with BazWizard, and our business analyst is not familiar enough
   with how we've implemented the GlurbEngine to write up an integration
   proposal"

The default approach that I've seen is to have one of the most experienced
people complete this work. However, as soon as the problem is well defined,
the less experienced people on the team could take over. Instead of having the
technical leader solve the problem, let them define the problem.

In the example above with missing data from the Quux report after 10pm, the
problem could be better defined like so:

1. let the leader draw out a diagram of all the components that are involved in
   a customer requesting the Quux report and getting the results. They should
   share this with the team to make sure it's clear and meaningful to any
   builder who's interested, and to see if other experienced folks have anything
   to add or correct.
2. let the leader identify what diagnostic information is available between the
   different components. Presumably some is missing because several people
   attempted to find the source of the problem but could not.
3. the leader then describes the problem: "how can we change our system so that
   we have enough diagnostic information in our Quux report generation process
   so that we can pinpoint the source of any data integrity errors.

Now, the ambiguous problem is a desgin problem, and we're looking for someone
with little experience who can take it on safely.

In my experience, it's common for experienced folks to do step 3 but not 1 or 2.
The less experienced folks are lost because they don't have a map in their heads
of how the Quux report is generated, and they don't have the reverse-engineering
experience to create the map for themselves. Meanwhile, the experienced person
considers this a trivial debugging task because the system diagram exists in
their head, and they avoid trivial tasks because they want to do interesting
work. This leads to the important but ambiguous task being neglected and
postponed.

In the second example with the BazWizard integration, it's a bit different --
the ambiguity is more product ambiguity than technical ambiguity. I've seen
folks dismiss this sort of problem with "when The Business has a clear ask of us
we can work on it" or "this problem statement doesn't make any sense".
Meanwhile, the person requesting the work knows that it's important but they
don't know enough to ask for something that the builers will accept. It's easy
for everyone to postpone or ignore the work, but there is someone who is
convinced that it's important, valuable work to do. Instead of neglecting this
ambiguous work, a technical leader can disambiguate it. For this example, a
leader might do the following:

1. Learn about BazWizard. Take a few days playing around with it, reading
   documentation, watching videos, and talking to anyone nearby who is familiar
   with it.
2. Talk to the business leader who asked for the integration. Find out why it's
   important.
     - for the sake of the example, suppose the business leader clarified that
       there is a specific workflow that customers would take that would involve
       the BazWizard integration.
3. Write a memo describing what they've learned so far:
     - the opportunity that the business leader has identified
     - the specific workflow that relates to BazWizard
     - what even is BazWizard? (Lessons learned from playing around with
       BazWizard)
4. Review the memo with the team, and facilitate a discussion around what steps
   can be taken to create a proof of concept for the BazWizard integration.
   Generate a list of goals, like:
     - get a dev copy of BazWizard for us to experiment with
     - figure out (via experiment or analysis) what needs to change in the
       GlurbEngine to integrate with BazWizard

### Reiteration: the alternative is stagnation

When the leader defines problems clearly so that inexperienced folks can safely
operate outside of their comfort zone, then

1. inexperienced folks grow quickly
2. experienced folks are available to tackle the ambiguous work and to automate
   the boring work

### Final thoughts: the biggest challenge is letting go

The hardest part about this approach is that the technical leader does just
enough work to be deeply invested in something, and then (just before the really
fun design work starts) they let someone else take over. That's a hard thing to
do. But, it's an extremely rewarding thing to help create a team where everyone
is working on interesting, valuable work. 
