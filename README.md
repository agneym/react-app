# React Configuration

Configuration for a React app.

Uses Webpack 4, Babel 7.

## Quick Overview

- `git clone --depth 1` this repository to get started.
- `npm install` to install needed dependencies.
- `npm start` to start the application on port 3002
- `npm build` to build the application.

You can replace these with their `yarn` counterparts, if you prefer.

## Features

- ### [POSTCSS Plugins](http://postcss.org/)

  Has PostCSS setup and configuration exposed.

  - [Preset ENV CSS](https://preset-env.cssdb.org)

    Write future CSS today. Better than using Preprocessors like SASS or LESS because it's pure CSS that you learn.

    Comes with _autoprefixer_ for your styles.

  - [PostCSS Normalize](https://www.npmjs.com/package/postcss-normalize)

    Normalize stylesheets based on browser support for browserlist.

- ### [ESLint](https://eslint.org)

  Extends rules followed by [CRA](https://create-react-app.dev/). You can turn rules on or off from `.eslintrc.json`. You can choose to ignore files on whole from `.eslintignore`

  Note: ESLint has it's style formatting options turned off by default, because it is handled by `Prettier` later on.

- ### [Babel](https://babeljs.io/)

  Used to compile your modern javascript to es2015 compatible javascript.
  You can change the configuration with .babelrc file.

- ### [Prettier](https://github.com/prettier/prettier)

  Formats code in place, so you don't have to learn the styling rules.

- ### [Workbox](https://developers.google.com/web/tools/workbox)

  Generates an optimised service worker with support for precaching and offline loading.

- ### Unit Testing
  Unit testing setup using [Jest](https://facebook.github.io/jest/).
  Supports component testing with [React Testing Library](https://testing-library.com/docs/react-testing-library).
  Hooks can be tested with [React Hooks Testing Library](https://react-hooks-testing-library.com/)

## Other enhancements

1.  Code split into `vendor.js` and hashed javascript filenames. This helps in pushing new code without worrying about caching issues.

1.  Supports dynamic imports and lazy loading.

1.  Supports fast refresh and hot module reloading for React components.

1.  Webpack automatically looks for and installs plugins that are not installed by default.  
    Just import the required library and let webpack worry about installing it.

        https://github.com/webpack-contrib/npm-install-webpack-plugin

1.  Removes prop types from production build

_Feel free to throw in a pull request._
