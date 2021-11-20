Before we started pairing and mobbing, each person had their own task in
progress. Because of review queuing, at any given time about half of the team was
wrapping up one task while working on a new task. Average WIP/person was &gt;1.5.

Now, with 2+ people per task, we're at &lt;0.5 WIP/person.

On an 8 person team, with 1.5 WIP/person, that's 12 different tasks in flight.
You may be called on to help any team mate at any time, so throughout the week
you could be switching context between up to 12 tasks. Or you can avoid that by
ignoring your coworker's work. Neither of those are good options.

On an 8 person team with &lt;0.5 WIP/person, that's about 3 different tasks in
flight that we may have to switch context between. Even if I'm paying attention
to everything that all my team mates are doing, I'm within my context switching
limits. Less stress, more collaboration.

### Impact

Our working style is radically changed by dropping below the 1 WIP/person
threshold. That may sound dramatic, but mostly it's just queueing theory and
lean engineering.

#### More collaboration

  - standups are more interesting
  - knowledge spreads quickly and organically throughout the team
  - reduce waste of handoffs, coordination, delays for review, context switching

#### Less stress

I'm not scattered and struggling to keep up with the team's activity. When there
are multiple things in flight that I have opinions about, it's not hard for me
to have my voice heard. I'm not worried that I'll miss something exciting or
important that my team mates are doing, because we're working together.

#### More flexible team schedule and work breakdown

  - unexpected sick leave or family needs don't impact our work much, because no task has a
    single person working on it
  - we can leave for appointments, leisure activity, or family commitments
    throughout the day (even for critical, time sensitive work) because there are
    several others continuing the work in our stead
      - at times this come-and-go schedule actually improves productivity,
        because we have focussed, refreshed team members working on the critical
        work from the time the first person logs in to the time the last person
        leaves. Suppose I start early and take a 3 hour lunch break for a long
        bike ride. My team mate starts at a normal time, but leaves at 3pm for
        an hour to pick up their kids from school. They stay late. together, we
        worked non-stop on the work for 10 hours in the day.  with vigor,
        without sacrificing from our personal lives.
  - we can switch tasks based on our interest and personal preferences without
    impacting team productivity. Suppose we have two in progress tasks (coding
    to add a feature; investigating a mysterious system outage) with ~3 people
    each. I'm coding, but something comes up with the investigation that's
    really
    interesting to me. Also someone on the investigation (who's been at this for
    a week now) is tired of log diving and wants to code. We swap places. Before
    we swap, we make sure the folks staying on our task have all the context
    from our minds. After we swap, we can get the context from the remaining two
    people. This option to come and go helps us keep up morale, share skills,
    and bring fresh perspectives to difficult work.

### How we got here

Two years ago when I joined this team, our WIP/person was at least 1.5. We
"uncovered better ways of developing software by doing it and helping others do
it". We made suggestions to each other, tried things out, retrospected, shared
our experiences with neighboring teams. And repeated. It took about three months
from when I started to our first pairing session, another three months before
pairing became a standard practice on our team, and another six months before
mobbing became more normal. Along the way we had to grow a lot in our mobbing
skills ([mobbing pattern language](https://github.com/JayBazuzi/Mobbing-Pattern-Language),
[mobbing RPG](https://github.com/willemlarsen/mobprogrammingrpg), etc.)
to overcome collaboration obstacles. Then, we started applying mobbing to
non-feature work: operational investigations, infrastructure changes, document
writing. Along the way we had to figure out how to explain this to new team
members as our team lost and gained members.  


#### Aside: on sharing our experiences with neighboring teams

The sharing with neighbors was consistently instructive for us, but not
consistently effective. To teach, we had to summarize, so we had to understand
what we were doing. We were exposed to new questions, doubts, and corner cases.
That was helpful for us. On the recieving end, it was interesting to see what
parts other teams refused to believe or failed to apply. Some of what we're
doing doesn't even apply to neighboring teams! It's critical to tune practices
to your very very specific context if you want it to take hold. See also: the
["Just Sharing" principle](https://justsharing.dev).

### What does this look like in practice?

1. When we start a new task, instead of asking "how few people do we need", we
   ask "how many people can we get working on this task"
2. Whenever we're collaborating, it's up to each individual to decide if they
   should stay or if they should go do something else.
    - As an individual, you can stay if you're either contributing or learning
    - If you feel like working solo, you can do so. It's acknowledged that this
      is usually worse for team productivity, but it's important for keeping our
      minds fresh and motivated
3. When you finish a task, you ask the team if anyone has something in progress
   that you can help finish.
4. When you're stuck waiting on something, you should catch up on clerical work
   before starting new task (e.g. install software updates, respond to emails,
   complete required training, submit your expenses, etc.)
