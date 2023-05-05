# Notes

## Github commit message conventions

# Exercises of this lesson 1

1. Explain to a 10-year-old what is git
2. Initialize a git repository
3. Create the file in the repository
4. Commit the first change
5. Understanding commit messages
6. Publish to Github
7. Add README.md and commit

# Exercises of this lesson 2

1. Explain how to internet works
2. Setup netlify to deploy the website
3. check deploy
4. Change the domain name

# Exercises of this lesson 3

1. take a tour of vscode
2. try some shortcuts

# Exercises of this lesson 4

1. knowing how a dev in a team works?
2. create a branch
3. Do the change in the branch
4. open a pull request(PR)
5. merge the PR
6. going back to main

## 1.1 Explain to a 10-year-old what is git

- git is a version control system that allows you to keep track of changes in your code and collaborate with other developers.

## 1.2 Initialize a git repository

- git init - we initialize a git repository in the current folder (the folder where we are located) and we can see that a new folder called .git has been created. This folder contains all the information about the repository. We can see that the folder is hidden because it starts with a dot. If we want to see the hidden files we can use the command ls -a. We can also use the command git status to see the status of the repository.

## 1.3 Create the file in the repository

- We create a file called index.html and we add some content to it. We can see that the file is not being tracked by git. We can see this by using the command git status. We can add the file to the repository using the command git add index.html. We can see that the file is now being tracked by git. We can see this by using the command git status. We can also use the command git add . to add all the files in the current folder to the repository.

## 1.4 Commit the first change

- We can commit the changes using the command git commit -m "first commit". We can see that the file is now being tracked by git. We can see this by using the command git status. We can also use the command git add . to add all the files in the current folder to the repository.

## 1.5 Understanding commit messages

- **feat** - A new feature
- **fix** - A bug fix
- **docs** - Documentation only changes
- **style** - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor** - A code change that neither fixes a bug nor adds a feature
- **perf** - A code change that improves performance
- **test** - Adding missing tests or correcting existing tests
- **chore** - Changes to the build process or auxiliary tools and libraries such as documentation generation
- **revert** - Reverting a previous commit
- **WIP** - Work in progress

## 1.6 Publish to Github

- We can publish the repository to github using the command git push origin master. We can see that the repository has been published to github. We can see this by going to github and checking the repository.

## 1.7 Add README.md and commit

- We can add the file README.md to the repository using the command git add README.md. We can see that the file is now being tracked by git. We can see this by using the command git status. We can commit the changes using the command git commit -m "add README.md". We can see that the file is now being tracked by git. We can see this by using the command git status.

## 2.1 Explain how to internet works

- When we type a URL in the browser, the browser sends a request to the DNS server to get the IP address of the server. The DNS server sends the IP address to the browser. The browser sends a request to the server using the IP address. The server sends a response to the browser. The browser renders the response.

## 2.2 Setup netlify to deploy the website

- Netlify is a service that allows us to deploy our website. it is a hosting platform. We can deploy our website to netlify by going to netlify.com and clicking on the button "New site from Git". We can select the repository that we want to deploy. We can select the branch that we want to deploy. We can select the folder that contains the website. We can click on the button "Deploy site". We can see that the website has been deployed to netlify. We can see this by going to netlify.com and checking the website.

## 2.3 check deploy

- We can check the deploy by going to the website and checking the website.

## 2.4 Change the domain name

- We can change the domain name by going to netlify.com and clicking on the website. We can click on the button "Domain settings". We can click on the button "Edit site name". We can change the name of the website. We can click on the button "Save". We can see that the name of the website has been changed. We can see this by going to netlify.com and checking the website.

## 3.1 take a tour of vscode

- Visual Studio Code is a code editor. It is a text editor that has some features that make it easier to write code. It has syntax highlighting, code completion, code snippets, code refactoring, debugging, integrated terminal, version control integration, and many more.

## 3.2 try some shortcuts in vscode for Windows

- Ctrl + Shift + P - Open command palette
- Ctrl + P - Open quick open
- Ctrl + Shift + N - New window
- Ctrl + Shift + W - Close window
- Ctrl + Shift + Tab - Switch to previous window
- Ctrl + N - New file
- Ctrl + O - Open file
- Ctrl + S - Save file
- Ctrl + Shift + S - Save file as
- Ctrl + F4 - Close file
- Ctrl + W - Close editor
- Ctrl + Shift + T - Reopen closed editor
- Ctrl + F - Find
- Ctrl + H - Replace
- Ctrl + Shift + F - Find in files
- Ctrl + Shift + H - Replace in files
- Ctrl + Shift + V - Open preview to the side
- Ctrl + K V - Open preview
- Ctrl + K Z - Toggle word wrap
- Ctrl + K Ctrl + F - Format document
- Ctrl + K Ctrl + O - Fold all block comments
- Ctrl + K Ctrl + I - Fold all regions
- Ctrl + K Ctrl + 0 - Fold level 1
- Ctrl + K Ctrl + 1 - Fold level 2

## 4.1 knowing how a dev in a team works?

- A developer in a team works by creating a branch. The developer makes the changes in the branch. The developer opens a pull request(PR). The pull request(PR) is reviewed by another developer. The pull request(PR) is merged. The developer goes back to the main branch.
- We can create a branch using the command git checkout -b feature/first-branch. We can see that we are now in the branch feature/first-branch. We can see this by using the command git branch. We can make the changes in the branch. We can open a pull request(PR) by going to github and clicking on the button "Compare & pull request". We can add a title and a description to the pull request(PR). We can click on the button "Create pull request". We can see that the pull request(PR) has been created. We can see this by going to github and checking the pull request(PR). We can merge the pull request(PR) by going to github and clicking on the button "Merge pull request". We can click on the button "Confirm merge". We can see that the pull request(PR) has been merged. We can see this by going to github and checking the pull request(PR). We can go back to the main branch using the command git checkout master. We can see that we are now in the branch master. We can see this by using the command git branch.

## 4.2 create a branch

- We can create a branch using the command git checkout -b feature/first-branch. We can see that we are now in the branch feature/first-branch. We can see this by using the command git branch.

## 4.3 make some changes in the branch

- We can make the changes in the branch. We can add the file index.html to the repository using the command git add index.html. We can see that the file is now being tracked by git. We can see this by using the command git status. We can commit the changes using the command git commit -m "add index.html". We can see that the file is now being tracked by git. We can see this by using the command git status. We can add the file README.md to the repository using the command git add README.md. We can see that the file is now being tracked by git. We can see this by using the command git status. We can commit the changes using the command git commit -m "add README.md". We can see that the file is now being tracked by git. We can see this by using the command git status.

## 4.4 open a pull request

- We can open a pull request(PR) by going to github and clicking on the button "Compare & pull request". We can add a title and a description to the pull request(PR). We can click on the button "Create pull request". We can see that the pull request(PR) has been created. We can see this by going to github and checking the pull request(PR).

## 4.5 merge the pull request

- We can merge the pull request(PR) by going to github and clicking on the button "Merge pull request". We can click on the button "Confirm merge". We can see that the pull request(PR) has been merged. We can see this by going to github and checking the pull request(PR).

## 4.6 go back to the main branch

- We can go back to the main branch using the command git checkout master. We can see that we are now in the branch master. We can see this by using the command git branch.
