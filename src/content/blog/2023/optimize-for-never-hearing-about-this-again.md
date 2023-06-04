### background

The longer I work in a role, the more past things I helped build exist. If those
things are being maintained and/or run in production, I'm liable to have my
current work interrupted by requests to participate in those things.

#### types of interruptions

- someone (or some team) got paged for an operational incident and wants your
  advice on how to fix a bug in code you wrote
- someone (or some team) is designing an improvement to a system that you
  initially designed and they want input from you (or your team)
- someone (or some team) is coding a new feature in an area of the system that
  you (or your team) designed, and they're not familiar with the patterns you
  used -- they want your input.

#### aside: team structure and interruptions

These "give me the context" interruptions only happen when you have independent
work on the same area of code. This might happen because:
- **history:** teams and ownership have changed/shifted over years of organizational
  evolution
- **multiple teams:** there is a reason to have the effort of multiple teams
  working on your product (e.g. because of the great business opportunity, or
  because of weird organizational politics), **but** your product is not
  architected in a way that each team can fully own and operate an independent
  slice of the application.
- **multiple individuals:** your team chooses to have so much work in progress
  that many solo workers or pairs work on unrelated things in the same codebase
  at the same time

If you have worked for a few years in an environment that has none of those
characteristics: would you be willing to tell me more (on Mastadon or email)?
That sounds like a great environment and I'd love to hear what it's like.

But now, back to the discussion of interruptions:

#### nice to be needed, not nice to need

For me, some part of me feels validated or satisfied when folks need my input.
But on the other hand, when I can't get my work done without getting some
information from someone else, that's disappointing. I reject the idea that I
should intentionally work in a way that makes people need me -- that seems
unprofessional.

I see then a goal: **can I build in such a way that other folks are not stuck
coming to me for information so they can do their jobs?**

### "give me the context" interruptions

First: an inventory of the types of "give me the context" interruptions I see:

- very confusing code, not sure how it works
- unfamiliar patterns used
   - and not sure how to follow the pattern
   - and not sure why the standard patterns weren't used
- need to make some quick configuration or tuning change, not sure where to do it.
  It was supposed to be a quick change so they're asking for help instead of
  reading and understanding 1000s of lines of code.
- I notice someone rebuilding something we already built -- probably they didn't
  know it already exists and I should go show them

### optimizing for never hearing about this again

Since those interruptions are distracting for me and frustrating for the person
who needs my help to do their work, I have developed a variety of practices to
reduce folks' dependence on me when they are maintaining my code. Here's how I
code so that future maintainers don't need me.

#### For unexpected decisions, use ADRs

Many decisions I make while coding are obvious/natural. I am pretty sure that
most people would make a similar decision as one of the first options when faced
with the same problem. I don't bother explaining those.

For the minority of decisions where I have learned some reason why the obvious
or default option doesn't work or isn't strategically suitable, I'll use an
[Architectural Decision Record](https://adr.github.io/) to explain what I know,
what I chose, and how that impacts us.

#### For weird code, put it in a small, well-tested class with a big comment

Sometimes, a solution needs some ugly code. Maybe it uses reflection, or it has a
very complicated algorithm not related to our core business. It's the code that
is both hacky and very clever. When I find myself writing code like that, I do
a few things:
1. extract it to a separate file with a very clear class/method name so that
   nobody has to look at this code unless they have to change it. 
2. write very good unit tests for the code, so if someone has to understand it
   they can read the crisp, comprehensive tests for the code.
3. write a *huge* comment at the top explaining why this mess is needed, how it
   works, and where you can learn more. Sometimes I even go so far as to give
   advice for how you can remove this class if you have an alternative.

The bottom line: when I *must* write code that does not meet my basic
readability and maintainability standards, I make sure I've hidden it away and
done everything I can to make it less awful for whoever touches it next.

#### For code that's likely to change often

Sometimes we code configuration, tuning parameters, or even algorithms that
(based on our understanding of the business) we know might have to change in the
next few months or year. Often those things are integrated with the single class
that uses them. Suppose you have 150 lines of code that uses some config or
tunable parameter, if the parameter is in that file then maintainers need to
grok the file before changing the value. You can get some benefit by extracting
the config as immutable constants in the top of the file (because they can be
found easily for editing). You may want to go further and extract a well-named,
small configuration object from that 150 line class.  With both those
approaches, the idea is to minimize the amount of code folks have to read and
understand before they can make the config change. While you're unit testing
your 150 line class, it would help to test it with different configurations.
Then, when folks change the config they will have confidence that it's safe to
do.

The bottom line: if folks aren't stressed or confused, they can make their
change more quickly and confidently. Extract the stuff that changes often into
small, independent classes that can be edited with ease.

#### More to come
There are a few more notes for me to add here, but I thought it would be better
to publish this incomplete than let it rot in my drafts folder.
