Chris Beams writes in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/):

> A properly formed Git commit subject line should always be able to complete the following sentence:

> If applied, this commit will *your subject line here*

That sounds helpful, but I know I'll forget it. So I wrote a git commit template to prompt me:

## Git commit templates:
[*Git docs for config commit.template*](https://git-scm.com/docs/git-config#Documentation/git-config.txt-committemplate)

> Specify the pathname of a file to use as the template for new commit messages.

## Inside my git config

    [commit]
      template = ~/dotfiles/git-commit-template.txt

## ~/dotfiles/git-commit-template.txt

```
# If applied, this commit will:

# Your commit message will provide context for you and everyone else who reads it in the future.
# Write it with care.
#
# -> Separate subject from body with a blank line
# -> Limit the subject line to 50 characters
# -> Capitalize the subject line
# -> Do not end the subject line with a period
# -> Use the imperative mood in the subject line
# -> Wrap the body at 72 characters
# -> Use the body to explain what and why vs. how
```

## Conclusion
When I run `git commit`, I'm prompted to complete the sentence **If applied, this commit will...**
&mdash; I hope that will help me train myself to write more useful commit messages.
