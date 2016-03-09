# react-redux-mui-boilerplate
A dead simple, yet slightly opinionated setup for ReactJS projects

### Project Structure

* Built with [Webpack](https://webpack.github.io/)
* Tested with [Mocha](https://mochajs.org/)
* Supports ES6 via [Babel](https://babeljs.io/) transpiling
* View rendering via [ReactJS](https://facebook.github.io/react/)
* HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Utilizes [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh
* Utilizes [redux](http://redux.js.org/index.html) for state management
* Utilizes [react-redux](https://github.com/reactjs/react-redux) for stateful component bindings
* Utilizes [react-router](https://github.com/reactjs/react-router) for application routing
* Utilizes [react-router-redux](https://github.com/reactjs/react-router-redux) for router/state synchronization
* Supports [SCSS](http://sass-lang.com/) styling with [autoprefixing](https://github.com/postcss/autoprefixer)
* Contains out-of-the-box Redux and Webpack configurations for both production and development. No additional configuration required.
  *   Production:
    *   `/webpack.config.prod.js`
    *   `/src/redux/store/configure-store.prod.js`
  *   Development:
    *   `/webpack.config.dev.js`
    *   `/src/redux/store/configure-store.dev.js`

### Get Started
1. git clone https://github.com/mikechabot/react-redux-mui-boilerplate.git
2. `npm install`
3. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`
