

# Contribution Guidelines

We welcome contributions from the community! By contributing to this project, you agree to abide by our code of conduct. Please take a moment to review these guidelines to ensure your contributions are well-received.

## Table of Contents

- [Introduction](#introduction)
- [Code of Conduct](#code-of-conduct)
- [Using Better Commit](#using-better-commit)
- [Design Patterns](#design-patterns)
- [Stack-Specific Guidelines](#stack-specific-guidelines)
- [Bug Reports](#bug-reports)
- [Pull Requests](#pull-requests)
- [How to Contribute](#how-to-contribute)

## Introduction

Thank you for your interest in contributing to the Rasengan.js Templates project! Contributions can be in the form of new templates, bug fixes, documentation improvements, and more.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Using Better Commit

We use the Better Commit CLI to standardize commit messages and branch naming conventions. This ensures that our commit history is clean and easy to follow. Please follow these steps to install and use Better Commit:

### Installation

Install Better Commit globally via npm:
```bash
npm install -g better-commits
```

### Creating a Branch

When creating a new branch, use the structure provided by Better Commit:
```bash
better-commit branch
```

### Making a Commit

Use the Better Commit CLI to make your commits:
```bash
better-commit
```

For more details, refer to the [Better Commit documentation](https://github.com/Everduin94/better-commits).

## Design Patterns

To maintain consistency across our templates, we recommend following these design patterns:

### Container-Presenter Pattern

- **Container Components**: Handle state management and business logic.
- **Presenter Components**: Handle the rendering of UI elements.

### Atomic Design

- **Atoms**: Basic building blocks (buttons, inputs).
- **Molecules**: Groups of atoms functioning together (forms, cards).
- **Organisms**: Groups of molecules forming a distinct section (headers, footers).
- **Templates**: Page-level layout components.
- **Pages**: Specific views/screens in the application.

Certainly! Let's structure the Design Patterns section respecting the Atomic Design pattern. Here's how it should look:

---

Recommended project structure for templates following the Atomic Design pattern:

```
rasenganjs-examples/
├── template1/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Input/
│   ├── molecules/
│   │   ├── Header/
│   │   ├── Sidebar/
│   ├── organisms/
│   │   ├── HomePage/
│   │   ├── AboutPage/
├── template2/
│   ├── atoms/
│   │   ├── Icon/
│   │   ├── Label/
│   ├── molecules/
│   │   ├── Navbar/
│   │   ├── Footer/
│   ├── organisms/
│   │   ├── DashboardPage/
│   │   ├── ProfilePage/
```

This structure adheres to the Atomic Design principles, organizing components into atoms, molecules, and organisms for better scalability and reusability.

---


## Stack-Specific Guidelines

### React with TypeScript and Tailwind CSS

#### React

- Use functional components and hooks.
- Prefer composition over inheritance.
- Ensure components are reusable and maintain a single responsibility.

#### TypeScript

- Define clear types and interfaces.
- Use `strict` mode in `tsconfig.json`.
- Avoid using `any` type.

#### Tailwind CSS

- Use utility-first approach.
- Define custom themes in `tailwind.config.js`.
- Avoid using inline styles when Tailwind classes suffice.

## Bug Reports

A bug is a demonstrable problem caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

### Guidelines for Bug Reports

1. **Validate and lint your code** to ensure the problem isn't due to a simple error.
2. **Use the GitHub issue search** to check if the issue has already been reported.
3. **Check if the issue has been fixed** by reproducing it with the latest master or development branch.
4. **Isolate the problem** by creating a reduced test case and a live example (use [JS Bin template](https://jsbin.com)).

### Submitting a Bug Report

A good bug report should be detailed and clear. Include the following:

- **Title**: Short and descriptive.
- **Summary**: The issue and the browser/OS environment.
- **Steps to Reproduce**: 
  1. This is the first step.
  2. This is the second step.
  3. Further steps, etc.
- **Live Example**: A link to a reduced test case.
- **Additional Information**: Any relevant details such as code snippets and potential solutions.

Example:

```
Title: Error rendering component on Safari

Summary: The component crashes on Safari 14.0. The issue seems to be related to the use of optional chaining.

Steps to Reproduce:
1. Open Safari 14.0.
2. Navigate to the component page.
3. Observe the crash.

Live Example: [JS Bin Link]

Additional Information: The error appears to be caused by optional chaining, which isn't fully supported in Safari 14.0. Removing optional chaining resolves the issue.
```

## Pull Requests

Good pull requests—patches, improvements, new features—are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

### Guidelines for Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Adhering to the following process is the best way to get your work included in the project:

1. Fork the project, clone your fork, and configure the remotes:
    ```bash
    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/rasenganjs-examples.git
    # Navigate to the newly cloned directory
    cd rasenganjs-examples
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/rasengan-dev/rasenganjs-examples.git
    ```

2. If you cloned a while ago, get the latest changes from upstream:
    ```bash
    git checkout master
    git pull upstream master
    ```

3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:
    ```bash
    git checkout -b <topic-branch-name>
    ```

4. Commit your changes in logical chunks. Please adhere to these git commit message guidelines or your code is unlikely to be merged into the main project. Use Git's interactive rebase feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:
    ```bash
    git pull [--rebase] upstream master
    ```

6. Push your topic branch up to your fork:
    ```bash
    git push origin <topic-branch-name>
    ```

7. Open a Pull Request with a clear title and description against the master branch and direct it to the `dev` branche.

### Important Notes

By submitting a patch, you agree to allow the project owners to license your work under the terms of the MIT License.

## Semantic Git Commit Messages

Inspired by Sparkbox's awesome article on semantic commit messages. Please use the following commit message format:

- **chore** (updating npm tasks etc; no production code change) -> `git commit -m 'chore: commit-message-here'`
- **docs** (changes to documentation) -> `git commit -m 'docs: commit-message-here'`
- **feat** (new feature) -> `git commit -m 'feat: commit-message-here'`
- **fix** (bug fix) -> `git commit -m 'fix: commit-message-here'`
- **refactor** (refactoring production code) -> `git commit -m 'refactor: commit-message-here'`
- **style** (formatting, missing semi colons, etc; no code change) -> `git commit -m 'style: commit-message-here'`
- **test** (adding missing tests, refactoring tests; no production code change) -> `git commit -m 'test: commit-message-here'`

## How to Contribute

1. Fork the repository.
2. Create a new branch using `better-commit branch`.
3. Make your changes.
4. Commit your changes using `better-commit`.
5. Push to your forked repository.
6. Create a pull request against the `main` branch of this repository.

Thank you for contributing! Your help is greatly appreciated.

---
