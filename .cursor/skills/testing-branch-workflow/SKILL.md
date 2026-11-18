---
name: testing-branch-workflow
description: >-
  Runs this portfolio only from the testing branch, makes every requested
  change on testing, and after the user verifies it opens a pull request from
  testing into main and merges it. Use for any edit, bugfix, feature, local
  run, commit, pull request, or merge in the gopikasoundar portfolio.
---

# Testing branch workflow

This portfolio has two branches: `testing` and `main`. Do all work on `testing`.

## Local run

- Check out `testing` before starting or restarting the app.
- Run it with `npm run dev` from this repo.
- Leave the dev server on `testing` while making changes.

## Making changes

1. Stay on `testing`. Do not create another branch unless the user explicitly asks for one.
2. Make the requested change only on `testing`.
3. Commit and push `testing` when the change should be saved on that branch.
4. Show the user the result and wait for them to verify it.
5. Do not open a pull request or update `main` before that verification.

## After the user verifies

1. Push `testing` if it has unpushed commits.
2. Open a pull request from `testing` into `main`.
3. Merge that pull request into `main`.
4. Leave `testing` checked out.

`main` is the published branch. GitHub Pages deploys from `main`.
