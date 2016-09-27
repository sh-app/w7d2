const React = require('react');
const ReactDOM = require('react-dom');
import  Note  from './util/note';
import  configureStore  from './store/store.js';
import Root from './components/root';


let store = configureStore();
console.log(store.getState());


document.addEventListener("DOMContentLoaded", ()=> {
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
