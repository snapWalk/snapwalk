# react-boilerplate
A dead simple, yet slightly opinionated setup for ReactJS projects

### Project Structure

* Built with [Webpack](https://webpack.github.io/)
* Tested with [Mocha](https://mochajs.org/)
* Coverage with [Istanbul](https://gotwarlost.github.io/istanbul/)
* Supports ES6 via [Babel](https://babeljs.io/) transpiling
* View rendering via [ReactJS](https://facebook.github.io/react/)
* HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Utilizes [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh
* Utilizes [redux](http://redux.js.org/index.html) for state management
* Utilizes [react-redux](https://github.com/reactjs/react-redux) for stateful component bindings
* Utilized [redux-logger](https://github.com/theaqua/redux-logger) for capturing Redux actions 
* Utilizes [react-router](https://github.com/reactjs/react-router) for application routing
* Supports [SCSS](http://sass-lang.com/) styling with [autoprefixing](https://github.com/postcss/autoprefixer)
* Contains out-of-the-box Redux and Webpack configurations for both production and development. 
  * **Production:** Express server with `redux-logger` disabled.
  * **Development:** WebpackDevServer with [React Hot Loader](http://gaearon.github.io/react-hot-loader/), and `redux-logger` enabled.


### Get Started
1. git clone https://github.com/mikechabot/react-boilerplate.git
2. `npm install`
3. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`

### Test Commands
* `npm test`: Shortcut for test coverage command
* `npm run test:unit`: Run unit tests located in `test/unit/**/*.js`
* `npm run test:integration`: Run integration tests location in `test/integration/**/*.js`
* `npm run test:coverage`: Run test coverage for unit and integration tests
