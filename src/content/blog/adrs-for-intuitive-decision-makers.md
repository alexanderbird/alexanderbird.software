I've found [Architectural Decision Records (ADRs)](https://adr.github.io/) to be a
great way to help new team members understand the architecture, and to empower
less experienced folks to make architectural decisions. In other words, I find
ADRs help make room for everyone in the team to be involved in important
decision making.

Although I find the best ADRs (and best knowledge sharing) comes from
co-authoring ADRs in a pair or an ensemble of programmers, there are times where
one person has made a decision by themself and wants to write an ADR to share
that decision with the team (or to request feedback from the team). 

This blog post is about situations where I have made a decision intuitively -- I
know exactly what should be done, I'm confident about it, but I haven't
attempted to articulate why. It can be daunting to write a decision record when
I don't really know how I know that we should do a certain thing.

By the way, when I talk about "knowing I'm right" or "my decision is excellent",
I'm trying to be ironic. I find that when I make intuitive decisions I am
overconfident, and when I explain it to a team member I realize it's not quite
as obvious as I thought. If you're reading this thinking "he's overconfident" --
yes, I agree and I also think it's foolish overconfidence. That's why I write
the ADRs and replace overconfidence with good collaborative decision making. 

Here is my process for converting an intuitive decision to a juicy decision
record.

### 1. Write the decision

Although the first section of the ADR is "Context", the first thing on my mind
is the decision. So I leave *Context* blank and fill in the *Decision*. I ignore
all justifaction and explanation and declare what I "know" we should do.

### 2. Explain why it's good

With the decision recorded, I move down to the *Consequences* section and I
imagine team mates challenging me -- "Alex, why would we take that decision?". I
type out my response, covering the benefits of the approach, and explaining why
the negative aspects of it aren't too serious.

### 3. Answer the silly questions

Now that I've written down the decision with a few compelling benefits (and
maybe a few weaknesses), I'm feeling like my job is done. But then when I show
the decision and consequences to a team mate, they start asking a bunch of
"silly" questions. They ask "why don't you just do X" and propose something
that could never work. Or they say "this solution is bad at Y" when we know that
Y is not an important goal for this work. All these questions would be sensible
and wise if they weren't based on some incorrect information.

To answer these questions, I return to the first section of the ADR: *Context*.
Here, I write down all the facts that, if they were generally known, would
eliminate all silly questions about the decision. This section will have
information like "Alex experimented with X and found it impossible because of
these complications" and "The strategy we agreed on as a team last month
indicates that Y is not important for this initiative". The goal with this
section is that after someone with no context reads it, the decision section
will be very sensible -- perhaps even obvious. At the end of the exercise, it
should be easy for someone else on the team to defend the decision because it
just makes sense.

Sometimes, I can anticipate the "silly" questions and fill in the *Context*
before sharing the ADR with others. Other times I know something that I had no
idea other folks didn't know, and when they ask the "silly" questions I go back
and add the context which I just learned is missing. 

#### Describing guesses

Sometimes, after all the context has been shared, we see that there are several
equally viable options. In this case, I like to record something like "we could
have done A, B, or C. I selected B arbitrarily but if we learn something new
that leads us to favor A or C, we should switch to those". There are times when
we're designing software that we need to make choices that we can't defend.
That's normal and fine. However, I've found it's valuable to indicate when we're
choosing arbitrarily and when we have good reasons. There is an important
distinction between

1. "Hirom has used A, B, and C before and had bad experiences with A and C but
   good experiences with B, so we chose B. If you want to know more, ask Hirom
   to share some stories"
2. "We can't find concrete reasons to prefer A, B, or C. Luise chose B
   arbitrarily because they were the one building this and liked the sound of B"

The first is a case of "good reasons that we haven't bothered articulating", and
the second is "no good reason".

When we don't distinguish between these two cases, folks assume that every
decision made was a good one and tend to stick with it, even when we uncover new
evidence that it's a poor decision. In the first case, if someone with no
experience in A, B, or C doesn't like the choice (but can't say why), we should
probably ignore their intuition and trust Hirom's experience. In the second
case, if anyone doesn't like a choice (but can't say why), we may choose to
investigate further because we know that we chose arbitrarily. There are times
where we have unspoken/unwritten reasons, and it's helpful to indicate that
there are reasons even if we don't say what the reasons are.

### 4. (Maybe) change your decision

Sometimes, as you write out the facts in the *Context* section, someone on your
team informs you that you're mistaken. Perhaps you said "the alternatives are A,
B, and C" and your team mate said "well D would also work, right?". Or maybe you
said "we have made a strategic decision to optimize for Y instead of Z" but your
team mate said "oh I actually just came from a customer meeting and we've
learned that Z is a regulatory requirement, so we can't deprioritize it. We have
to choose an option that optimizes for Z". Usually these corrections come in the
*Context* section, but it might also be in the *Consequences* section. For
example "an additional consequence is that to implement B we will have to
integrate with the QuuxBroker, and last time we tried that it took an extra
month. But if we changed the decision to A then we could avoid QuuxBroker". 

In all these cases, when the facts change, sometimes the decision changes too.
In those cases, we celebrate discovering our mistake early on (before building),
we update the ADR, and then we proceed.

### Recap

When we make intuitive decisions, we're computing tradeoffs and analyzing facts
in our mind and then articulating the result of our analysis (the decision we've
made). When we take the time to share the tradeoffs and the context in an ADR we
always help coworkers understand, we sometimes discover we were wrong (incorrect
facts or errors in the tradeoff analysis), and we make it easier for others to
change, reverse, or extend our decision in the future when our situation
changes. This exercise helps to make decision making collaborative, even if the
initial decision was made intuitively by a single team member in isolation.
