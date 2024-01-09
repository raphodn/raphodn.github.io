# Website

This is the source code of [my personal website](https://raphodn.github.io/).

Built with [Gatsby](https://www.gatsbyjs.org/), a static-site generator powered by React & GraphQL.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Branches](#branches)
- [Useful resources](#useful-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

1. Clone the repository

  ```
  git clone git@github.com:raphodn/raphodn.github.io.git
  ```

2. Install dependencies

  ```
  yarn
  ```

3. Run on localhost

  ```
  yarn dev // which is 'gatsby clean && gatsby develop'
  ```

  The app will be available at http://localhost:8000

  A GraphQL client will also be available at http://localhost:8000/___graphql

4. Build

  ```
  yarn build (which is gatsby build)
  ```

5. Deploy to Github Pages

  ```
  yarn deploy
  ```

  Builds and pushes the code to the master branch

## Branches

`master` deployed static website

`development` raw code & pages

## Useful resources

Theme used: https://github.com/panr/gatsby-starter-hello-friend

Emoji cheat sheet:
- https://www.webfx.com/tools/emoji-cheat-sheet/
- https://emojipedia.org/
