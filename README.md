[![Build Status](https://travis-ci.org/mikechabot/react-boilerplate.svg?branch=master)](https://travis-ci.org/mikechabot/react-boilerplate)
[![Dependency Status](https://david-dm.org/mikechabot/react-boilerplate.svg)](https://david-dm.org/mikechabot/react-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/mikechabot/react-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/mikechabot/react-boilerplate?branch=master)

# react-boilerplate
A slightly opinionated yet dead simple boilerplate for ReactJS

#### http://mikechabot.github.io/react-boilerplate/

## Features

#### Build Process
 * Built with [webpack](https://webpack.github.io/)
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management
* [redux-entity](https://github.com/mikechabot/redux-entity) for domain entity management
* [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunk-action-creators.js#L21)
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/react-boilerplate/blob/master/src/routes.js)

#### HTTP
* [Customizable](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/ajax-service.js#L11), promise-based HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Implementing [data services](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/data-access-service.js#L29) utilize [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)

#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev**: [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/). `redux-logger` enabled.
  * **Prod**: [Express](http://expressjs.com/) server with `redux-logger` disabled.

#### Testing
* Tested with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

## Get Started
1. git clone https://github.com/mikechabot/react-boilerplate.git
2. Run `yarn` or `npm install`
3. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`
4. Build for production:
  * `npm run build:prod`
5. Test:
  * `npm test`
