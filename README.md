# TypeScript sample

This a sample repository on how to use TypeScript with Redux, React and Webpack.

<img src="https://david-dm.org/ematipico/typescript-sample.svg"/>

The application simulates a listing of products divided by categories and after that it allows you to show every detail of the product. It's possible to sign in to have access to the personal page using a login.

... personal cart coming soon ...

## Libraries used

In order to create this project, I used some libraries that I usually use to startup a project like this:
- [`redux`](http://redux.js.org/) as state management library
- [`redux-saga`](https://redux-saga.js.org/) to handle asynchronous operations when an action is dispatched  
- [`awesome-typescript-loader`](https://github.com/s-panferov/awesome-typescript-loader) to transpile TypeScript code
- [`ava`](https://github.com/avajs/ava) for the test suite
- [`postcss`](http://postcss.org/) for using CSS4 features (as you can see there is not SASS or LESS)
- [`webpack`](https://webpack.js.org/) (obviously) to bundle the code
- [`tslint`](https://palantir.github.io/tslint/) for coding style and rules

## How to

To kick off the project and see it with HMR (Hot Module Reloading)
```sh
npm start
```

To run the test suite
```sh
npm test
```
To create a production ready bundle

```sh
npm run dist

```
