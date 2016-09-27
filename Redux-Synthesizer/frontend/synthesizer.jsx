const React = require('react');
const ReactDOM = require('react-dom');
const Note = require('./util/note');
import { configureStore } from './store/store.js';


let store = configureStore();

const App = () => {
  return (
    <p>
      React loaded!
    </p>
  );
};

document.addEventListener("DOMContentLoaded", ()=> {
  ReactDOM.render(<App/>, document.getElementById("root"));
});
