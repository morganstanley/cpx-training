# Introduction to CircuitPython with CircuitPlayground Express Site

This directory houses the source code for the website. The built website code lives at `/docs`.

This is a [GatsbyJS](https://www.gatsbyjs.org) site based on the [gatsby-starter-22boxes-uno](https://www.gatsbyjs.org/starters/iamtherealgd/gatsby-starter-22boxes-uno/) starter.

GatsbyJS is a React based framework for creating static sites that can easily be hosted in spaces such at [Github Pages](https://pages.github.com).

## How to contribute to the site

### Dependencies

[Git](https://git-scm.com)
[NodeJS](https://nodejs.org/en/)
[GatsbyJS](https://www.gatsbyjs.org/docs/quick-start)
Text Editor ([VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com))

### Develop

Clone this repo and change directory into `/site`.

```
npm install
```

To run preview server:
```
npm run start
```

### Build
```
npm run build
```

###  Publish

Create a pull request and reach out to the contributing team for a code review and merge.

### Implementation Notes

By default, GatsbyJS will build a site to live at the root of a domain name, but with Github Pages, the site will live in a subdirectory of `cpx-training/` so a [slight modification](https://www.gatsbyjs.org/docs/path-prefix/) to the `gatsby-config.js` was needed to define a path prefix.