<!--
ex01: explain to a 10-year-old what is git
challenge
Without using any technical terms can you explain what is git? Why do we need it? In the simplest terms?

If you don't have someone to explain, maybe tweet or put a LinkedIn status about it.

understanding
what, who and when was done something to code
If you can explain it to a 10-year-old, you know it.
 -->

# Exercise 1: Explain to a 10-year-old what is git

## What is Git? (Explained without technical terms)

- Git is a version control system. It is used to track changes in code.
- It is used to track changes in code.

# Exercise 2: Initialize a git repository

## Initialize a git repository

- Create a new directory called `git-exercise` and `cd` into it.
- Initialize a git repository in the current directory.
- Create a file called `README.md` and add some text to it.
- Add the `README.md` file to the staging area.
- Commit the changes with the message `Initial commit`.
- Check the status of the repository.

## Solution

```bash
mkdir git-exercise
cd git-exercise
git init
touch README.md
echo "Hello World" > README.md
git add README.md
git commit -m "Initial commit"
git status
```

# Exercise 3: Check deploye

## Check deploye

- Create a new branch called `deploy`.
- Switch to the `deploy` branch.
- Create a file called `deploy.sh` and add some text to it.
- Add the `deploy.sh` file to the staging area.
- Commit the changes with the message `Add deploy script`.
- Switch back to the `master` branch.
- Check the status of the repository.

## Solution

```bash
git checkout -b deploy
touch deploy.sh
echo "Deploying..." > deploy.sh
git add deploy.sh
git commit -m "Add deploy script"
git checkout master
git status
```
