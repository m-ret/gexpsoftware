# GEXP Software: A redesign

GEXP Software is a website currently built on WordPress. This repository is the redesign project of the website, where it is being migrated to Next.js.

Welcome to the GEXP Software: A Redesign repository! This document provides you with essential information about the project and the branching standards that must be followed.

## Project Details

This project uses [Nextjs 13.1.6](https://nextjs.org/blog/next-13) and requires `Node v18.16.0` and `Yarn v1.22.19`. To install dependencies, use the following command:

Install dependencies:
```javascript
yarn install
```
Run the project:
```javascript
yarn dev
```

## Branching Standards
In this project, we follow strict branching standards to keep our repository organized and our development process streamlined.

### Branch Naming Convention
Please adhere to the following naming conventions when creating new branches:

#### Feature Branches
To create a new feature, use the following format:
```javascript
feature/{name of the base branch}/{short description of the feature}
```
Replace `{name of the base branch}` with the name of the branch you are branching off. This is typically either main or develop.

Replace `{short description of the feature}` with a brief description of the feature you are adding, using hyphens to separate words.

Example:

```javascript
feature/develop/add-login-functionality
```

#### Bug Fix Branches
To fix a bug, use the following format:

```javascript
fix/{name of the base branch}/{short description of the bug}
```
Replace `{name of the base branch}` with the name of the branch you are branching off. This is typically either main or develop.

Replace `{short description of the bug}` with a brief description of the bug you are fixing, using hyphens to separate words.

Example:

```javascript
fix/develop/correct-login-validation
```

## Pull Requests
NEVER push to the main branch directly. Always create a pull request (PR) from your current branch against the develop branch. I will review your changes and merge them into the develop branch before merging them into the main branch.

When contributing to this project, make sure to follow the branching standards mentioned above. Failure to adhere to these standards may result in your pull request being rejected.

Thank you for contributing to the GEXP Software redesign project!

### [🔌 Documentation](https://nextjstemplates.com/docs)

### ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fstartup-nextjs)
