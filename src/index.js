import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'How are you?', likecount: 5 },
  { id: 2, message: 'My first comment', likecount: 8 },
  { id: 3, message: 'My second comment', likecount: 9 },
];

let dialogs = [
  {id: 1, name: 'Dymich'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Victor'},
  {id: 4, name: 'Sveta'},
  {id: 5, name: 'Valera'},
];


let messages = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'YO!'},
  {id: 4, message: "I'm fine"},
  {id: 5, message: 'Yo!'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
