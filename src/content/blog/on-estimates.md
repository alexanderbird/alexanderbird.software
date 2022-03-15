We choose to work in time boxed sprints. We agree as a team what we want to do
in the next two weeks (with input from stakeholders) and then track our progress
against that list of goals. It helps us stay focussed as a team and gives
predictability and structure to our conversations with stakeholders.

Also, we organize our work into projects: a broad set of capabilities that we
will add to the system over the course of 2 to 12+ months that fit within a
broad theme. The scope and timelines of the projects are variable because we
can't predict the future, but we still make projections and have a conversation
with our leaders if we're deviating significantly from our projections.

As a team, we want to enter a sprint with a shared understanding of the work
that we're about to undertake. We want to have a clear idea of the scope of most
of the tasks we're undertaking. We endeavor to have a clear scope for all of
them, and tolerate the occasional outlier when the unknowns unknowns (or simple
miscommunications) interfere with our plans. 

### What's a task?

I'm talking about a demonstrable, independent change to a system described from
a customer's point of view. As soon as we get more granular (into technical
tasks) we've left the realm of scoping and delved into implementation. This is a
fuzzy, vague line that I can't describe precisely, but I know there is a line
there. The book "No Estimates" explores this idea (and other important ideas
about estimation). See my [notes on the book (and a link to the publisher's
website)](/blog/no-estimates.html)

### Estimates

This leads to the classic question:

> So... how long is this going to take?

The classic approach is to talk about how we're going to do it, and then people
say numbers for the amount of time it will take.

But this is too precise, like measuring the lumber you're about to cut down to
the millimeter. Your pencil, your saw blade, and the university
student cutting the lumber all introduce a margin of error that makes your
millimeters irrelevant. (Aside -- layman's definitions: "precision" is how much
detail is in the number, and "accuracy" is how well the number matches the real
world.)

Some folks are tempted to pursue "more accurate estimates", and if that were
successfull then I guess the precision would be meaningful. In the contexts that
I've worked in, I've never seen the pursuit of more estimation accuracy to yeild
worthwhile results. If "more accurate estimates" works for you, you may find the
rest of this post to be uninteresting. 

Instead of increasing accuracy to make our precision useful, I've had success
updating our precision to match the accuracy. Low accuracy means there's not
much value in high precision. 

### Less Precise Estimates

The first step to less precise estimates is that we drop the unit of time and 
use an arbitrary point value. As a team, we develop an intuition about how many
points we do in a sprint. This number (which we call "velocity") accounts for
the various interruptions in the work week -- it's a measure of what we really
do.

With this system still produces numbers that are too precise (which means they
take an unecessarily long time to agree on).

> 🧑🏽‍🦱: Is this a 10 or an 11?  
> 🧑🏻‍🦰: The last one was an 11, but this is easier because of &lt;details>, so it
> should be a 10.  
> 👩: That's true, but it also has &lt;additional complication> which the last one
> doesn't, so it should be a bit bigger -- an 11.  
> 🧑🏽‍🦱: oh, now that you bring that up, I've just remembered that we'll need to
> also update the docs for this one but we didn't for the last, so I think it
> should be a 12.  

Those meetings are excruciating. We can't help but debate at length on these
things, even though half of our 12s take less time than half of our 10s. The
accuracy doesn't warrant that level of precision.

So, we simplify further. The larger the number, the more that could go wrong
with the work, so the less accuracy we need. So we addopt the fibonacci sequence
for our estimates: a story can only be 1, 2, 3, 5, 8, 13, 21, etc.

This helps. Now we ask:

> Is this double the last one, or about the same?

If we're on the fence, we pick arbitrarily. If we arbitrarily made the last one
bigger, and we have to make another arbitrary call, then we make this one
arbitrarily smaller and it comes out in the wash. Once we do the work, we expect
that some take longer than we thought and others take less time than we thought.
To repeat: these numbers are not accurate. **We're not trying to make them more
accurate, we're trying to stop wasting time producing numbers that are
uselessly precise, given the low accuracy.**

### What if everything was a "1"?

The problem with the higher estimates is that those stories are volotile. The
odds of something going wrong with the high estimate stories is much higher than
the low ones. (That's the reason we're less precise with the high ones: we know
that our estimates are less accurate.)

We can go a step further than fibonacci by saying "we only do low risk stories".
Here's how:

### "We only do low risk stories"

#### 1. Timebox

For the things that you're estimating high because there's uncertainty, don't do
the task. Instead, design an experiment or spike that will reduce the
uncertainty. Declare that you'll work on it for about as long as your average
story takes (e.g. a 10 person, 2 week sprint that does 20 stories per sprint
will have 100 dev days / 20 stories = 5 dev days per story, so use that as your
time box). When you get to halfway through your timebox, if you're not telling
people that you're "so close, we're just wrapping up" then you're not going to
finish it in the timebox and you abort. For next sprint, you re-evaluate: if you
learned enough that you're confident about the story, then you do the work. If
you're still not confident, design another time boxed experiment. 

Also, if this is the single most important thing for you to do, then there's no
need to restrict the timebox to one story worth of effort. You could also say
"we're going to do nothing until we answer this question".

#### 2. Split

There are other stories that you estimate high because they have lots of parts. 

> 🧑🏽‍🦱: Why did you vote 13 instead of 8 for this?  
> 🧑🏻‍🦰: In addition to adding the new logic to &lt;one place>, we'll also have to
> integrate with &lt;other thing>.  
> 🧑🏽‍🦱: Ah, I thought we only had to do the integration part. Yeah ok, this should
> be a 13.  

We've already done the work of identifying the different parts. Let's go a step
further and split the story into a few smaller stories. Sometimes this is hard
because we have discussed technical parts but we want to split into stories that
are meaningful to customers. With practice and training we get better at finding
tiny slices of customer value that we can deliver. The smaller the slice, the
lower the risk.

After we split the stories, we re-asses. It might be that some parts need
experiments, other parts should be split further, and others can be called "1"s.
It's also common to find that one part is more important than the others, and we
can postpone or abandon some parts in favor of more valuable work. By splitting
stories, we can start working on just the most important parts of them. 

#### 3. Call it "1"

When something is as small as we can get it, then we can call it a "1" and
are ready to pull it into our sprint.

### "How far along are we?"

For all your reporting and forecasting, you count the stories. All the stories
are approximately the same size (they're not exactly the same size, but since
our estimates aren't that accurate there's no need to be more precise than
"basically the same size"). 

This is in keeping with the lean engineering idea of reducing variance, or
reducing the number of different things involved in your process. (If we were
building cars and we halved the number of bolts involved, then our bolt
management could be simpler. Same here, but with stories.)

### How can we make our estimates more accurate?

I know I said I didn't think this was possible. However, we've reframed the
problem and now things are different. Before I said that it's not a worthwhile
pursuite to improve the accuracy of estimates for an arbitrary size task.
However, we've observed that smaller tasks have more accurate estimates. So, if
we make our tasks smaller than we'll have more accuracy.

So if we want more accurate predictions, we can split our stories smaller.




