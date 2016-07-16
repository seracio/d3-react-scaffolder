# d3-react-scaffolder

![Capture](./images/capture.png)

This project is basically a remix of [react-d3-enter-exit-transitions] by Swizec but with a code that fits more to our development style.
The code is commented for the beginners on React and its numerous friends (webpack, redux, babel, ...)

## Development

```
npm i && npm run build:local
```
## Notes

### React with webpack

* To use React in production mode, you will need to set a var env `NODE_ENV=production`, check `webpack.config.js`
* Webpack needs a `babel-loader` in order to compile properly babel and jsx code

### React animation

* We're using here the low-level API of React's animations to use d3's transitions:
```javascript
import TransitionGroup from 'react-addons-transition-group';
// ...
<TransitionGroup component="g">
</TransitionGroup>
```

### Redux

* We've made here a very basic Redux setting, you should have a look to `redux-thunk` or `redux-saga` to get more complex actions
* `reselect` is a great tool if you want to use derived datas to your React components

## (Re)sources 

* [react-d3-enter-exit-transitions]

[react-d3-enter-exit-transitions]: https://github.com/Swizec/react-d3-enter-exit-transitions