# react-boilerplate
A slightly opinionated setup for ReactJS projects

#### http://mikechabot.github.io/react-boilerplate/

## Features

#### Build Process
 * Built with [Webpack](https://webpack.github.io/)
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management
* [redux](http://redux.js.org/index.html) for state management
* [react-redux](https://github.com/reactjs/react-redux) for stateful component bindings
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing Redux actions 

#### Routing
* [react-router](https://github.com/reactjs/react-router) for client-side routing

#### HTTP
* Promise based HTTP support via [Axios](https://github.com/mzabriskie/axios)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)

#### Development
* Utilizes [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh
* * Contains out-of-the-box Redux and Webpack configurations for both production and development. 
  * **Production** // [Express](http://expressjs.com/) server with `redux-logger` disabled.
  * **Development** // WebpackDevServer with [React Hot Loader](http://gaearon.github.io/react-hot-loader/), and `redux-logger` enabled.

#### Testing
* Tested with [Mocha](https://mochajs.org/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) for Redux state testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

## Get Started
1. git clone https://github.com/mikechabot/react-boilerplate.git
2. `npm install`
3. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`

#### Test Commands
* `npm test`: Shortcut for test coverage command
* `npm run test:unit`: Run unit tests located in `test/unit/**/*.js`
* `npm run test:integration`: Run integration tests location in `test/integration/**/*.js`
* `npm run test:coverage`: Run coverage for unit and integration tests
