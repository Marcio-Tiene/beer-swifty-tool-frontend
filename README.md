# Beer Swifity Tool

# Overview

What?

- An app to make beer recipes and share it
- A marketplace to buy and sell things related to beer craft
- A marketing tool that connects who want to sell with the buyers.

Why?

- Actually there is no such a thing like this in or region, Florianópolis, Santa Catarina, Brasil.
- To make easy to buy, sell and trade, beer stuffs

# Git flow

visit https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow to understand the concept.

## Initializing git flow

Use the following command:

\$ git flow init

Initialized empty Git repository in ~/project/.git/

No branches exist yet. Base branches must be created now.

Branch name for production releases: [master]

Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?

Feature branches? [feature/] -> feature/<your name>/ -> press enter

Release branches? [release/] -> press enter

Hotfix branches? [hotfix/] -> hotfix/<your namer>/ press enter

Support branches? [support/] -> support/<your name>/ -> press enter

Version tag prefix? [] -> press enter

## Starting work

Pick one job type of:
feature,
hotfix,
support,
release

Then create the branch using git flow command.

\$ git flow < job > start < {detailed job that are you doing, without capital letters and using "-" instead of "space"} >

eg:
if the developer's name is wilson:

\$ git flow feature start creating-the-subscriber-button.

The you will be redirected to the branch:

(feature/wilson/creating-the-subscriber-button).

### Now just start commiting your job!!

Then publish on git hub with the command:

\$ git flow publish < {detailed job that are you doing, without capital letters and using "-" instead of "space"} >

eg:

\$ git flow publish creating-the-subscriber-button.

### Now start your pull requests to develop branch
