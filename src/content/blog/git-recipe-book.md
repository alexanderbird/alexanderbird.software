### Contents
 - [Questions you can ask git](#questions-you-can-ask-git)
   - [Who...](#who)
     - [Who wrote line 47 of foo/bar/baz.cs?](#-who-wrote-line-47-of-foobarbazcs)
     - [Who has worked on this project (in the last n months)](#-who-has-worked-on-this-project-in-the-last-n-months)
     - [Who should I ask for help with module `src/controllers/CoolWidgetController`?](#-who-should-i-ask-for-help-with-module-srccontrollerscoolwidgetcontroller)
   - [What...](#what)
     - [What commits relate to JIRA ticket FOO-164?](#-what-commits-relate-to-jira-ticket-foo-164)
     - [What is different between branch 'feature/foo' and branch 'master'?](#-what-is-different-between-branch-featurefoo-and-branch-master)
     - [What branches exist locally? And on the remotes?](#-what-branches-exist-locally-and-on-the-remotes)
     - [What files have changed in the past two weeks](#-what-files-have-changed-in-the-past-two-weeks)
     - [What have I done this week?](#-what-have-i-done-this-week)
   - [Other...](#other)
     - [When was this regression introduced?](#-when-was-this-regression-introduced)
     - [Will there be merge conflicts if I merge master into my branch?](#-will-there-be-merge-conflicts-if-i-merge-master-into-my-branch)
 - [Disaster Recovery](#disaster-recovery)
   - [You deleted your branch before pushing](#-you-deleted-your-branch-before-pushing)
   - [Your commits are mixed with other commits that don't belong](#-your-commits-are-mixed-with-other-commits-that-dont-belong)
   - [Your most recent commit has the wrong commit message](#-your-most-recent-commit-has-the-wrong-commit-message)
   - [You notice that several commits back you have a bad commit message](#-you-notice-that-several-commits-back-you-have-a-bad-commit-message)
   - [You want to combine several commits](#-you-want-to-combine-several-commits)
   - [You need to rewrite history that you've already pushed](#-you-need-to-rewrite-history-that-youve-already-pushed)
 - [General tips](#general-tips)

### Questions you can ask git

#### Who...
##### Who wrote line 47 of foo/bar/baz.cs?  

    git blame foo/bar/baz.cs

Usually git clients / web applications have a more interactive way to do this:

  - [In GitHub](https://help.github.com/en/articles/tracking-changes-in-a-file)
  - In BitBucket, it's called "Annotate"

In GitHub, you can click on a commit hash to see the `blame` output from before
that commit. That's useful if, for example, Susan made a formatting change to
this line last week, but the thing you care about is when Andrew changed the
conditional logic on the line six weeks ago. From the command line it's not as
easy as clicking a link to move backwards in time.

##### Who has worked on this project (in the last n months)  

    git shortlog -s
    git shortlog -s --since "5 months ago"

##### Who should I ask for help with module `src/controllers/CoolWidgetController`?  

    git shortlog -s -- src/controllers/CoolWidgetController

The person with the most commits in that folder is probably a good start. If
they're not on the project anymore, try the next highest &mdash; or add a `--since`
filter to only look at recent commits.

#### What...
##### What commits relate to JIRA ticket FOO-164?  

If you are in the habit of putting the ticket slug in the commit message

    git log --grep FOO-164

Or, try another search term instead of "FOO-164".

##### What is different between branch 'feature/foo' and branch 'master'?  

    git diff --name-status master feature/foo

(If you're currently on branch `feature/foo` you can omit "feature/foo" from the
end of the command.)

If you only care about files that have been, for example, deleted

    git diff --name-status --diff-filter=D master feature/foo 

See `git help diff` and search for `--diff-filter` for additional filters
(modified, created, etc.).

##### What branches exist locally? And on the remotes?  

    git branch
    git branch --all

And if you're looking for a specific branch, you can pipe the output to `grep`
(bash) or `Select-String` (PowerShell) to narrow down the list.

    git branch --all | grep foo
##### What files have changed in the past two weeks  

    git log --name-only --pretty= --since "2 weeks ago"

This will likely contain duplicates, so you may want to clean up the output:
  - bash: `git log ... | sort | uniq`
  - PowerShell: `git log ... | Sort | Get-Unique`

Note that the `--pretty=` is setting `--pretty` to `""`. The pretty command
determines what to show for the commit summary; by setting it to an empty value,
no commit summary will be shown. All you'll see is the `--name-only` output that
lists the names of affected files.

##### What have I done this week?  

    git log --author "My Name" --since "1 week ago"

#### Other
##### When was this regression introduced?  

When you know that the code worked at a certain commit (say, 1 month ago) but
doesn't work now, `git bisect` will help you efficiently search through all the
commits between then and now to find exactly which commit the regression was
introduced in. 

It's a more complicated command, see [the git bisect
docs](https://git-scm.com/docs/git-bisect) for details. The gist of it is that
it performs a binary search of all commits between the known good and known bad
commits. Either you check each commit manually and tell git that it's "good" or
"bad", or you provide git with a script to check if a given commit is "good" or
"bad" automatically.

##### Will there be merge conflicts if I merge master into my branch?  
This command does change your working copy, so make sure all your local changes
are committed or stashed before the following:

    git merge --no-commit --no-ff master
    git diff --cached
    git merge --abort

(Or if you want to go through with the merge: `git merge --continue`)

### Disaster Recovery
You've messed something up, now what?

##### You deleted your branch before pushing  

Don't worry, it's not gone! There's a detailed walk-through on this blog post:
[Recover a git branch you accidentally
deleted](https://opensolitude.com/2012/02/29/recover-git-branch.html). The key
idea is:

  - use `git fsck` to list all the unreachable commits
  - find the most recent commit on your lost branch by reading the commit
    messages
      - The blog post uses some bash-fu to get the commit message. If you only
        have access to PowerShell, you'll have to sort that step out on your
        own.
  - checkout that commit, creating a new branch `git checkout <the-hash> -b
    your-branch-name`

The details are all in that blog post.

##### Your commits are mixed with other commits that don't belong  
Maybe because you merged the wrong branch in and then kept committing, or
because you started work in the wrong branch, or for whatever reason you have a
commit you don't want followed by a commit you do want.

 1. Identify the last commit before things went bad.
 2. Create a new branch at that commit with a temporary name (e.g. `temp`)
 3. Identify the hash for each commit in the messy area that you want to keep
 4. For each of those commits (from the earliest to the latest), run `git
    cherry-pick <commit-hash>`, fixing any merge conflicts as they arrive
 5. Review this new branch. If you are happy with it, you can delete the messed
    up branch (see above: "What is different between branch 'feature/foo' and
    branch 'master'?")
 6. Create and checkout a new branch with the same name as the branch you deleted
 7. Delete your `temp` branch.

Now, the branch that was once all messed up has only the commits you want, on
top of branch that you meant to be building on top of.

##### Your most recent commit has the wrong commit message  
This one's straightforward:

    git commit --amend

##### You notice that several commits back you have a bad commit message  
Find the commit hash of the commit before the one you want to rename, then:

    git rebase -i <that-hash>

In your editor, you will be presented with a list of all the commits between the
one you specified, and the current HEAD. To the left of each commit that you
want to rename, replace `pick` with `reword`. Git will re-apply each commit one
at a time, and for the ones you marked as `reword` you will be prompted to edit
the commit message.

##### You want to combine several commits  
Maybe you notice that two commits back you have several commits with a summary
"wip" and "more wip". Those should probably be combined with the commit after
them. 

As with rewording commit messages, identify the commit hash of the commit before
the ones that you want to combine, then:

    git rebase -i <that-hash>

Choose `fixup` to discard a commit's message, or `squash` to add the message to
the following commit. Like `reword`, you'll have the chance to revise the
commit message.

The full options for rebasing are (you'll see this help message when you execute
`rebase -i`):


    # Commands:
    # p, pick <commit> = use commit
    # r, reword <commit> = use commit, but edit the commit message
    # e, edit <commit> = use commit, but stop for amending
    # s, squash <commit> = use commit, but meld into previous commit
    # f, fixup <commit> = like "squash", but discard this commit's log message
    # x, exec <command> = run command (the rest of the line) using shell
    # b, break = stop here (continue rebase later with 'git rebase --continue')
    # d, drop <commit> = remove commit
    # l, label <label> = label current HEAD with a name
    # t, reset <label> = reset HEAD to a label
    # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
    # .       create a merge commit using the original merge commit's
    # .       message (or the oneline, if no original merge commit was
    # .       specified). Use -c <commit> to reword the commit message.
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.


##### You need to rewrite history that you've already pushed  
The tips above explain how to rewrite your git history. When you haven't pushed
those commits yet, that's all fine and well. However, once you've pushed your
commits, they're part of the shared history and you have no business rewriting
them.

Suppose you've pushed the branch `feature/snazzy-whatsit`, but then you noticed
that half of the commit messages are "wip". 

**If nobody else is working on `feature/snazzy-whatsit`** (and you're really
sure of it), you can rewrite the history as described above and then run `git
push --force` to tell the git remote that you're intentionally changing the
history. Usually this is not allowed on the master branch but is allowed on
feature branches.

**If other people are also working on `feature/snazzy-whatsit`**, then the only
reasonable course of action is to rewrite the history with their collaboration.
Go walk by their desk and ask to do it together. Whether this is worth doing or
not depends on how much your team cares about having a well-curated git history.

### General tips
 - Choose an editor you like for you commit message &mdash; you don't have to
   use vim
   - See [this list of suggestions for editor
     config](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)
     (scroll to the "git config editor - core.editor" section)
 - While working on a feature branch, if you rebase regularly from the base
   branch you can avoid larger merge conflicts when you merge back to the base.
 - [Commit message suggestions](/blog/git-commit-message-template.html)
 
