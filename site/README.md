# CPX-training Site

This directory contains the [GatsbyJS](https://www.gatsbyjs.org) source code for the website. The built website code lives at `/docs`.

The [GatsbyJS](https://www.gatsbyjs.org) site based on the [gatsby-starter-22boxes-uno](https://www.gatsbyjs.org/starters/iamtherealgd/gatsby-starter-22boxes-uno/) starter.

[GatsbyJS](https://www.gatsbyjs.org) is a [React](https://reactjs.org) based framework for creating static sites that can easily be hosted in spaces such at [Github Pages](https://pages.github.com).

## How to contribute to the site

### Dependencies

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [GatsbyJS](https://www.gatsbyjs.org/docs/quick-start)
- Text Editor ([VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com))

### Develop

Clone this repo and from a CLI (Terminal, CMD, etc) change directory into `/site` and run:

```bash
npm install
```

To run preview server:

```bash
npm run start
```

And load [http://localhost:8000](http://localhost:8000) in your browser of choice.

### Updating Content

The main content for the site lives in the [`/site/content`](https://github.com/MorganStanley/cpx-training/tree/master/site/content) directory.

[MarkDown Reference](https://daringfireball.net/projects/markdown/syntax)

#### Exercises

The [`/site/content/exercises`](https://github.com/MorganStanley/cpx-training/tree/master/site/content/exercises) directory contains directories name for the corresponding level and exercise. [`/site/content/exercises/L1-E1`](https://github.com/MorganStanley/cpx-training/tree/master/site/content/exercises/L1-E1) should contain Level 1 Exercise 1 details and code. The main content is build from the `index.md` file contained in each of these directories.

Please note that because the [starter project](https://www.gatsbyjs.org/starters/iamtherealgd/gatsby-starter-22boxes-uno/) used for this site is a blog template, the order of the exercises are dependent on the date included in the metadata that must be included at the top of each `index.md`.

```bash
---
template: exercise
title: Level 1 | Exercise 1 - Blink
date: "2020-05-01T23:46:37.121Z"
category: CircuitPython
tags: ["Level 1"]
---
```

As you can see from the example metadata above, the first exercise (L1 E1) starts on May 1, and the last one (L1 E6) is May 6. The index page listing the exercises lists them from earliest to latest which also drives the menu at the bottom of each exercise page for the previous and next exercises. I didn't really want to go through and modify the whole site structure to include an order metadata field, but if you want to change the whole thing around, please do. If not, just go ahead and add new exercises with newer and newer dates.

### Build

The build command will automatically replace the contents of the `/docs` directory with the built code.

```bash
npm run build
```

### Publish

Create a pull request and reach out to the contributing team for a code review and merge.

### Implementation Notes

By default, GatsbyJS will build a site to live at the root of a domain name, but with Github Pages, the site will live in a subdirectory of `cpx-training/` so a [slight modification](https://www.gatsbyjs.org/docs/path-prefix/) to the `gatsby-config.js` was needed to define a path prefix.
