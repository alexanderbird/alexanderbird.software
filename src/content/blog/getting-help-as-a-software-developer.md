I've put this list together for new developers, interns, or anyone transitioning
from small, I-can-fit-all-the-code-in-my-head software projects to larger
projects. In your transition, some of your questions and growing pains will be
specific to the team and project you're working on, and other things will be
common to any software endeavour. For most of the common things, there are
freely available resources to bring you up to speed.

My suggestion is to focus your questions for your team on:

 - things related to the project you're working on
 - things you're having trouble learning on line

In other words: whatever you can learn online &mdash; those things that are relevant
to any software project &mdash; look for online resources for. It's not because it's
bad to ask your team for help with the standard things &mdash; it's just that
you'll only have time for so many questions in a day, and why spend your
questions on topics you can find easily on the internet? There are many other
things that only your team mates can help you with.

I'm hoping these resources and strategies will help you to:

1. feel ok with being stuck, then
2. find answers on your own, or
3. ask good questions of your colleagues (mentors/peers)

### Feel OK with being stuck

Being stuck is a natural part of software development. You'll have to solve
problems that nobody else has solved before (even if you're using tools that many
people have used, and even if some part of the problem is very common). Get used
to feeling totally stuck &mdash; no idea what to do next. 

The thing is, often you are the person best qualified to solve the problem: you
may not have the most experience or knowledge, but you know the context. While
it can be tempting to ask someone more senior to bail you out, sooner or later
in your career you'll be the most senior one around. Might as well start
practising how to figure these things out now.

When you're feeling stuck:

<ol>
  <li> Set a time box: make note of the current time, and decide when you're going
     to give up and start asking someone else &mdash; make it 2 hours, 4 hours, 2
     days &mdash; it depends on how big the problem is. Use your judgment.
  </li>
  <li> Go through your bag of tricks. For now, that might be suggestions in the
  sections below, or a set of things you're used to trying. You'll build up your
  own in time.  Mine includes (in no particular order):
     <ul>
       <li> read documentation for a tool that I'm using that I'm not familiar with
       <li> can I add unit tests to understand what's going wrong?
       <li> can I debug the code and step through it to understand what's going
         wrong?
       <li> draw a picture of what I'm working on, see if it gives me any ideas
       <li> etc.
     </ul>
  </li>
  <li>When you reach the end of your time box or the end of your bag of tricks
    and are still stuck, prepare to ask for help: sort out in your mind (or on
    paper) what the problem is (I expect X but see Y), and what things (from
    your bag of tricks) you've tried. When you ask for help, you can then say
    something like:
    <blockquote>
      "Hey Alison, do you have a moment? I'm working on {context} but am seeing
      {Y} instead of {X} &mdash; I tried {A}, {B}, and {C} but none got me
      un-stuck. I tried googling for {search term} but that didn't help. Any
      suggestions?"
    </blockquote>
    Or, if you stopped because you reached the end of your time box,
    <blockquote>
      "Hey Ed, do you have a moment? I'm working on {context} but am seeing
      {Y} instead of {X} &mdash; I tried {A} and {B}, but it's been 4 hours and I 
      figured I should get some help. Any suggestions?"
    </blockquote>
  </li>
  <li> Finally, after you've had their help, take a moment to reflect: "did they
    share some special knowledge with me, or could I have found that answer on my
    own? Why did they have the answer, but I didn't?" Try to learn something from
    their approach that will help you the next time you feel stuck. Sometimes,
    it's just a matter of them having more knowledge and experience than you
    &mdash; but other times it's because they know a trick for getting un-stuck
    that you could adopt.
  </li>
</ol>

### Find answers on your own
- reading error messages (stack traces)
  - The principles are the same for any language, but here are two good articles
  - Compiled: [How to read and understand a Java Stacktrace](https://www.twilio.com/blog/how-to-read-and-understand-a-java-stacktrace)
  - Interpreted: [Python errors and exceptions
](https://anenadic.github.io/2014-11-10-manchester/novice/python/07-errors.html)
- Googling things you don't understand
  - When you hear a new term that you're a little fuzzy on, I'd suggest jotting
    it down in a notebook. When you've got some time at work, google that term,
    and skim through the results until you find one that sounds like it's the
    same thing you overheard someone talking about. Sometimes you'll need to do
    a few rounds of searches until you find the right search terms.
  - [The art of googling](https://www.giftegwuenu.com/the-art-of-googling/)
  - [Everything I googled in a week as a professional software
    engineer](https://localghost.dev/2019/09/everything-i-googled-in-a-week-as-a-professional-software-engineer/)
  - Don't forget to google your error messages
    - "{language} {tool/framework you're using} {paste error message}"
      - e.g. "JavaScript Stanza.io cannot read property 'send' of undefined"
    - [XKCD about googling error messages](https://xkcd.com/979/)
- learning a new language
  - [How to Quickly Learn a New Programming Language or
    Framework](https://nickjanetakis.com/blog/how-to-quickly-learn-a-new-programming-language-or-framework)
      - This one's a long narrative but gives you a good feel for how you can go
        about teaching yourself new programming languages. There's a TLDR at the end
        if you're impatient, but there are good nuggets in the story that are worth
        reading: 

### Ask good questions of your colleagues
- [How to create a Minimal, Reproducible Example](https://stackoverflow.com/help/minimal-reproducible-example) (it's from Stack Overflow help, but the principles are the same if you're asking someone for help in person)
- [How to debug small
  programs](https://ericlippert.com/2014/03/05/how-to-debug-small-programs/)
  &mdash; this one is linked from the Stack Overflow help article. It's especially
  relevant to go from thinking "it doesn't work" to having a clear, actionable,
  specific idea of what's not working.
- [The First Rule of Programming: It's Always Your
  Fault](https://blog.codinghorror.com/the-first-rule-of-programming-its-always-your-fault/)
  &mdash; Start with your code (rather than library code, operating system,
  etc.) 
