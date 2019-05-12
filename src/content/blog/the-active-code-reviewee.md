A constructive, collaborative, non-confrontational code review culture can make
a big impact by disseminating knowledge throughout the team, and improving the
overall quality of the code. **What do you do when you find yourself on a team that
doesn't do code reviews regularly?**

It should be easy enough to ask a peer for a code review
 > Hey, do you have a few minutes to come by my desk and do a code review for
 > me?

But if your reviewer isn't in the habit of reviewing, you may need to drive the
review if you want to get something out of it. As the person who's code is being
reviewed, you may need to ask pointed questions or even explain how to review
code. I'm calling that role an **active code reviewee**.

There are other situations where you might need to be an active reviewee:
 - Your team regularly does code reviews, but you don't usually get more
   feedback than "looks good to me"
 - You're the more senior developer on a two-person team, and you need to coach
   the more junior developer how to review your code
 - etc.?

## This is not a new problem
Consider [Better Questions for Better Design
Feedback](https://medium.com/eightshapes-llc/better-questions-for-better-design-feedback-c536271a4842),
an article about eliciting feedback on UI designs. Dan Brown says:

 > What is the single worst question to ask after presenting a design?
 >
 > “So what do you think?”

Last week when I was prompting my code reviewer for more feedback, I think I
went with

 > Do you have any feedback?

which I don't think is much better than "So what do you think?".

## What I should have asked instead
Here are some ideas for more constructive and specific questions to ask your
code reviewer:

 - Is this easy to read? Can you tell what's going on?
 - If you were to maintain this, what pain points would you have?
 - Does this look like it fits with the rest of the application, stylistically?
 - Do you have any advice for me? *(This is still open ended, but more specific
   than "what do you think")*
 - Is there anything really surprising here? Is it good surprising or bad
   surprising?
 - Should I add any documentation around this? *(Because sometimes to add a
   feature you have to learn some really obscure things, and then you forget
   that not everyone on the team knows that thing yet)*

You can probably think of many more questions that fit well with your team,
project goals, context, etc. The point is to have some questions ready.

## To sum up

When you have to be an **active reviewee**, take some time in advance to list
**what are you hoping to improve through this review?** During the review, ask
specific questions to elicit that sort of feedback from your reviewer.

*Happy collaborating!*
 
