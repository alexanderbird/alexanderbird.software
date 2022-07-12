For the sake of discussion, let's consider a change to a fictitious software
system that has administrators and regular users. It's not important what the
system does; we'll be discussing a specific pain point for administrators:
administrators should be able to choose between minimalist and advanced editing
modes.  The minimalist mode has a simplified view and the most common
operations. The advanced mode has detailed reporting and more complicated inputs
for advanced operations. Currently, all administrators see the "minimalist"
editing mode when they log in, and they can switch to "advanced" mode via the
settings menu.  Most administrators only ever use one of the two modes (and
about 42% of admins use the advanced mode). Many of the admins who use advanced
mode are frustrated that they have to click into settings and toggle the mode
every time they use the application. (Because of their elevated permissions,
they must be logged out after each session so they log in and choose the
advanced mode regularly.)

### The Tech Centric Way

The following is the approach that I've seen most often. It could be
characterized as "the traditional way" or "big design up front".

1. We write and review a document describing the use case. In this document we
   include statistics about how administrators use the current functionality and
   the expected benefit from changing it. Also, we outline the technical changes
   we'll make which will satisfy the use case:
   1. In the database, add a field for admin UI preference (make it an enum in
      case we add more modes)
   2. In the back end, add an API to read & write that admin preference field
      1. Also exception handling
   3. On the front end, when the admin updates the field, call the API to
      update the preference
      1. Also exception handling
   4. On the front end, when the page loads, call the API to retrieve the
      preference
      1. on success with minimalist value, do nothing
      2. on success with advanced value, switch to advanced
      3. on failure, show a helpful message and default to the minimalist page
2. We review and discuss these changes, including database schema details, UI
   mockups, error messages, and the cleanup we'd like to do to the code while
   we're at it.
3. Work begins. We unit test while we work.
4. At the completion of the work, we perform exploratory testing to work out any
   integration problems.
5. We demo and launch the new feature.

### The Customer Centric, Iterative Way

This approach is counter-intuitive because it apparently requires more
throw-away work. It requires imagining the system in an intentionally incomplete
state. That said, in practice, I've found this approach actually reduces
throw-away work and guesswork. 

1. We write and review a document summarizing the use case. In this document we
   include statistics about how administrators use the current functionality and
   the expected benefit from changing it. Also, we break down the following
   incremental improvements:
    1. When an admin changes from minimalist to advanced mode, logs out, and
       logs in again on the same browser without closing the browser, the
       admin sees the advanced mode
       - we plan on storing the value in the browser session storage
    2. Certain allow-listed administrators are permanently in advanced mode
       (from any computer)
       - we add an API that returns the UI preference for a given user, and
         we hardcode the list of "advanced mode" users. Currently, only one
         demo account is in the list. Make sure the demo account can still
         access the minimalist mode. 
    3. "advanced mode" admins can be changed without redeploying the app
       - for this, we update the db schema and move our hard-coded allow
         list into the database. For the demo, we toggle the databse value
         mid-demo to show that we can change the behaviour without
         redeploying
    4. All admins can toggle from minimalist to advanced mode and back and the
       change takes effect across different browsers and sessions
       - for this, we add the write API and hook it up to the database (this
         does the same thing we did manually in the demo for the previous
         step)
2. Begin implementing, one step at a time
   1. After the first one is complete, let the customers asking for the feature
      know that it now works as long as you don't restart your browser, and the
      full functionality will follow. Ask customers if they would like to opt in
      to have their accounts use the advanced mode by default (this will be
      available sooner than the full functionality)
   2. After the second one is complete, add all the customers who opted in to the
      allow list so it now defaults to advanced mode for them all the time. At
      this point, all the customers who were most frustrated with the old
      behaviour are satisfied and don't care about any future improvements
   3. After the third one is complete, we'll have to verify that all the
      allow-listed accounts from the previous step are still allow-listed
   4. After the fourth step is complete we can make a public announcement about
      the feature since it is now "complete".

### Comparison

#### Task Slicing

In both cases, we had UI work, API work, and database work. In the tech-centric
approach, we worked exclusively on one layer before moving on to the next. In
the customer-centric iterative approach, we worked primarily on one layer at a
time, with some small changes to other layers to integrate. (For example, for
the second step we updated API and UI; for the third step we updated the DB and
called it from the back end code.)

In the tech-centric approach, the primary slicing strategy is technical. In the
customer-centric iterative approach, the primary slicing strategy is based on
customer value (but we slice in such a way that the technical complexity is
still distributed across all the slices). In both cases we split the technical
complexity across multiple tasks; the difference is whether we track our changes
in terms of the customer capabilites that we enable or in terms of the technical
changes that we make. This is significant because the customer-centric tasks
leave us open to finding creative technical alternatives that achieve the same
outcome. On the other hand, in the tech-centric task breakdown, we need to
complete each task as planned because we are counting on the collaboration of
all the technical components to satisfy the customer requirements.

#### Release Cadence

In the customer-centric iterative approach, we did four releases instead of one. This
means:
  1. The most frustrated customers saw trust-earning changes after the first
     step and had their pain alleviated after the second step
  2. We paid the release cost four times instead of one. If it's very time
     consuming to release, this cost may be significant
  3. We regression tested four times instead of one. If we don't have an
     automated test suite that we trust, then this cost may be significant.

If we don't have the automation to keep the release cost low, then we're
incentivized to postpone releases.

##### Variant: batched customer-centric iterative development

In a case where our release cost is high, we can still take a customer-centric
iterative approach. Instead of launching after each step, we present a demo of
the new behaviour. Although the demo doesn't resolve customer pain, it does
still earn trust and solicits feedback (allowing us to correct our course early
if needed). At the end, when all the steps are complete, then we can perform the
costly release activities to launch the changes to customers. 

#### Impact on Inclusivity

In the tech-centric approach, the design document author made all the
interesting technical decisions for the feature. Then, everyone who helps to
build will implement the decisions made by the document author. On the other
hand, in the customer-centric iterative approach, the document only specifies
the customer capability which must be enabled at each step. There is a
suggestion for how to implement it, but it is brief and independent of the other
tasks. This means the coder gets to make the final decision. If you're in an
organization that values detailed design documents, then the coder can produce a
wiki or other written artifact as part of their work. (This is also may be a great time
to use [Architectural Decision Records](https://adr.github.io/). 

The result of the customer-centric iterative approach is that all team members
get to participate in the design (because the intersting decisions are made just
in time, concurrently with the development).

#### Impact on Boring Meetings

Whereas the tech-centric project approach requires up-front design review where
we anticipate problems, the customer-centric iterative approach postpones that
assessment until we have something executable to experiment with. Personally, I
find experiments more rewarding than "predict-the-future" meetings because I'm
not very good at predicting the future, and I don't like being wrong. I'd rather
do experiments so I am wrong less (and can code more) than discuss weeks or
months in advance of building (and risk guessing wrong). I have found that
guessing is often more expensive than designing the project in a way that makes
experimenting cheap. 

## Summary

In my experience, it's more natural to take the tech-centric approach to
implementing features, but it's safer, more rewarding, and more helpful to
customers to take the approach that I've called "customer-centric and
iterative". It comes down to preferring to adapt to change over following a
plan.
