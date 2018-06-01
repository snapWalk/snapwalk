# <a href='https://github.com/mikechabot/react-boilerplate'><img src='https://raw.githubusercontent.com/mikechabot/react-boilerplate/gh-pages/assets/img/header_photo.png' alt='logo' aria-label='https://github.com/mikechabot/react-boilerplate' /></a>

<div align="center">
 A slightly opinionated yet dead simple boilerplate for ReactJS, Webpack 4, and React Router v4.
 <br /><br />
  <a href="https://travis-ci.org/mikechabot/react-boilerplate">
    <img src="https://travis-ci.org/mikechabot/react-boilerplate.svg?branch=master" alt="build status" />
  </a>
  <a href="https://david-dm.org/mikechabot/react-boilerplate">
    <img src="https://david-dm.org/mikechabot/react-boilerplate.svg" alt="dependency status" />
  </a>
  <a href="https://github.com/mikechabot/react-boilerplate/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="prs welcome" />
  </a>
</div>

----

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Custom Configuration](#custom-config)

## <a id="live-demo">Live Demo</a>

 http://mikechabot.github.io/react-boilerplate/dist
 
 > Pretty landing page located [here]( http://mikechabot.github.io/react-boilerplate/)

----

## <a id="featurs">Features</a>

#### Build Process
 * Built with [webpack 4](https://webpack.js.org/configuration/)
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management
* [redux-entity](https://github.com/mikechabot/redux-entity) for domain entity management
* [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunks.js#L6)
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router v4](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/react-boilerplate/blob/master/src/Root.jsx#L5)

#### HTTP
* [Customizable](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/ajax-service.js#L8), [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Utilizes a [a generic data service](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/data-access-service.js#L48) to easily fetch data
* Example of [implementing the data service](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/domain/example-domain-service.js#L17)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer) and [normalize.css](https://necolas.github.io/normalize.css/)
* [Bulma](https://bulma.io/documentation/overview/start/) for out-of-the-box styling
* [glamorous](https://glamorous.rocks) for CSS-in-JS styling

#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev**: [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/). `redux-logger` enabled
  * **Prod**: [Express](http://expressjs.com/) server with `redux-logger` disabled

#### Testing
* Tested with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

----

## <a id="getting-started">Getting Started</a>

1. `$ git clone https://github.com/mikechabot/react-boilerplate.git`
2. `$ npm install`
3. Launch environment:
   *  **Production**: `$ npm start`
   *  **Development**: `$ npm run dev`
4. Build assets for production:
   * `$ npm run build:prod`
5. Execute tests:
   * `$ npm test`

----

## <a id="custom-config">Custom Configuration</a>

Use [`cross-env`](https://github.com/kentcdodds/cross-env) or a comparable library/command to set the `ENV_CONFIG_PATH` to the path of your JSON configuration file:

`$ cross-env ENV_CONFIG_PATH=/path/to/config.json npm start`

> **Note**: This path is made available to Webpack **only**, however the contents of the file are stamped on a global variable during the build process (`process.env.APP_CONFIG`, see [webpack.config.js](https://github.com/mikechabot/react-boilerplate/blob/master/webpack.config.js#L44)), which is then accessible via the [ConfigService](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/common/config-service.js#L8).

If your configuration is loaded successfully, you can expect to see the following indicator during startup:

```
** Using custom configuration located at "/path/to/config.json" **
```

#### Example

Using configuration file @ `D\:\_workspaces\foo.json`

    mikec@Krait MINGW64 /d/_workspaces/react-boilerplate (master)
    $ cross-env ENV_CONFIG_PATH="D\:\_workspaces\foo.json" npm start

    > react-boilerplate@2.5.0 start D:\_workspaces\react-boilerplate
    > npm run prod

    > react-boilerplate@2.5.0 prod D:\_workspaces\react-boilerplate
    > npm run build:prod && npm run start-server

    > react-boilerplate@2.5.0 build:prod D:\_workspaces\react-boilerplate
    > cross-env NODE_ENV=production webpack --progress --colors

    ** Using custom configuration located at "D:\_workspaces\foo.json" **

    Hash: 32bbf23a46e7ac19741a
    Version: webpack 3.5.5
    Time: 8711ms
             Asset     Size  Chunks                    Chunk Names
         bundle.js   563 kB       0  [emitted]  [big]  main
    css/bundle.css  1.68 kB       0  [emitted]         main
        index.html  1.58 kB          [emitted]

