import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyList from './MyList';

const toDos = ["Buy ice cream", "Play video games", "Sleep or nap"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <MyList theList={toDos}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
