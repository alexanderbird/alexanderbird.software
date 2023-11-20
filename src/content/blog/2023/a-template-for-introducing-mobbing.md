My response to the question
> I will be hosting a mob-programming session at work. This is my first-time. How can I make it a great experience for the team? There will be frontend, backend, qa, designers and business people present.
>
> -- [Alexander Alemayhu](https://fosstodon.org/@aalemayhu/111437233865622300)

I have found that the biggest challenge for a first-time session like this is
that the body of relevant knowledge about how to code collaboratively is vastly
larger than the group's attention span for instruction about ensemble
programming. They signed up to try it out with you, not to attend a 3-day deep
dive conference to become experts in all things mobbing. So what are the key
things to teach them to set them up for success? That's a hard question to
answer for a specific group, and an even harder question to answer in general.

I have found for first-time sessions like this, it's like the beginning of a
resource management video game: you have urgent short term things to attend to
but if you don't invest in some long term resource generation stuff, you'll lose
steam. Enemies are attacking and you have to defend your castle, but if you
don't plant crops then in four turns you run out of food. The game is fun
because of that tradeoff between "do the thing" and "make it easier to do the
thing later". With introducing mobbing, the collaborative work is "the thing"
and mobbing patterns, process instruction, and other training make it easier to
do the thing. Too much training and folks lose interest. Too little training,
and the collaboration goes poorly.

What I've found helps with introducing a group to mobbing is to to take about 5
minutes to introduce the absolute basics in a way that links to your current
process. First, the linking explanation -- maybe "usually we do &lt;your team's
design and documentation process&gt;, instead we have everyone here together and
we'll incorporate ideas as we build". Second, the basic mechanics -- the timer,
the rotation, "for an idea to go into the computer it must go through someone
else's hands, etc."

This will be enough to start, but probably you'll start hitting challenges --
folks not feeling comfortable taking breaks, debating instead of trying one
idea, etc.. Instead of pre-empting all the problems with up-front training, you
can build in mini retros. I've found every few hours is a good cadence. If you
start mobbing in the morning, then 15m before you'd like to break for lunch you
can stop the work and do a little informal retro -- and take some time to teach
mobbing patterns to address the challenges. After lunch, make any process
changes you need to after the retro discussion, and repeat. 

At the start of the day, I hint at this retro format at the end of the very
short intro. I might say something like:

> Collaborative programming is a skill that takes practice and instruction to
> develop. We're going to try it out this morning, and then take a moment to
> reflect on what is and isn't working, and adjust.

I'm trying to set the expectation that the ensemble programming won't come
naturally, and to pre-explain the retrospective so at 11:45 when we're tired and
hungry I can say "let's take a moment to reflect on the format this morning" and
everyone knows what I'm talking about.

During that mini retro, I might start with "How was that for you? What about the
collaboration worked or didn't work?". I don't use a visual retro board, sticky
notes, or anything like that. I want it to be a lightweight "tune up" retro that
we can do throughout the day. I make sure to give everyone in the group a chance
to speak, so after the outspoken folks volunteer answers, I'll call on whoever
didn't and ask them what their experience was like. I work hard to validate
their experiences -- if someone says "it was hard to type with everyone watching
me" my first response will probably be something like "yeah, it can be
intimidating!". For some concerns, after acknowledging the feeling, I would
teach something in the moment -- a quick few sentences to address the issue. For
something bigger (like feeling nervous about being watched), I might make a note
of it and teach something at the start of the next session.

When we're back from lunch and ready to go again, I might start with bringing up
the point from retro: "in the morning Alan pointed out how it can be
intimidating to be typing with everyone watching" and then I would teach
something to address that. It would be specific to the group -- if Alan was
getting really low level navigation ("press X. No, capital X. It's over there.
Left. Left!"), we could talk about how the driver can pull instructions when
they're ready by asking for clarification -- let the navigators make space for
the driver to work. Or maybe the navigation was fine, but we're in a lower trust
work environment and we're used to high-stakes code reviews -- I can talk about
how ensemble programming only works with trust, and can suggest we make a
working agreement about not judging each other harshly for "bad" ideas or
mistakes in the mob -- after all, when we work solo we have time to correct our
mistakes in private before we share, and we're choosing to give up that
pre-editing in favor of collaboration. In any case, I'm combining the feedback
from retro with what I know about the team culture, what I've seen in the
morning ensemble session, and maybe some quick research over lunch hour, and I'm
teaching something tailored to the team to help navigat that issue.

I've adopted this practice because the body of knowledge about ensemble programming
process is much greater than the attention span of a group that wants to try
mobbing. Instead of crafting the perfect primer, I start with the smallest
possible instruction and make time to sense and adapt, providing tailored
process teaching throughout the day to address the biggest concerns of the
group. That allows me to make the best use of the limited attention span.

