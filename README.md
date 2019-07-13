# BacchUX

This website is built with [Gatsby](https://www.gatsbyjs.org) - a «Blazing-fast static site generator for React».

## Structure

All files in `pages` represent, surprise surprise, pages/routes on smartive.ch.
They compose different components into full pages. So if you want to change
something, that's probably where you start looking.

These components live inside `components` and are structured by an Atomic Design
approach, which all of us should know by now. It might not be perfect, but it's
at least something. Relevant SASS files are placed inside the component's folder,
but there are also some old, legacy SCSS files in `scss`.

## Content
Currently most of the stuff is statically exported from the `data` directory,
but if someone wants to do this properly with GraphQL, they're more than welcome
to do so.

## Setup

```shell
yarn
```

## Development

```shell
yarn develop
```

This runs gatsby in dev mode on `http://localhost:8000` with HMR, etc.

## Build

```shell
yarn build
```
