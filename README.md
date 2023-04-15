# GEXP Software: A redesign
A redesign of the website https://gexpsoftware.com/ which is a WordPress based website, here we are migrating it to Nextjs.

Welcome to the GEXP Software: A redesign repository! This document will provide you with important information about the project and the branching standards that must be followed.

### This project uses [Nextjs 13.1.6](https://nextjs.org/blog/next-13)

Node: `18.16.0`

Yarn: `1.22.19`

Install dependencies:
```bash
yarn install
```
Run the project:
```bash
yarn dev
```

## Branching Standards

In this project, we follow a strict branching naming convention to keep our repository organized and our development process streamlined. Please adhere to the following standards when creating new branches:

### Feature Branches

For new features, please create a branch with the following format:

feature/{name of the base branch}/{short description of the issue}

- Replace `{name of the base branch}` with the name of the branch you are branching off. Typically, this will be `main` or `develop`.
- Replace `{short description of the issue}` with a concise description of the feature being implemented. Use hyphens to separate words.

Example:
```
feature/develop/add-login-functionality
```
### Bug Fix Branches

For bug fixes, please create a branch with the following format:

fix/{name of the base branch}/{short description of the bug}

- Replace `{name of the base branch}` with the name of the branch you are branching off. Typically, this will be `main` or `develop`.
- Replace `{short description of the bug}` with a concise description of the bug being fixed. Use hyphens to separate words.

Example:
```
fix/develop/correct-login-validation
```
## Contributing

Please make sure to follow the branching standards mentioned above when contributing to this project. Failure to adhere to these standards may result in your pull request being rejected.

Thank you for your cooperation!

### [🔌 Documentation](https://nextjstemplates.com/docs)

### ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fstartup-nextjs)
