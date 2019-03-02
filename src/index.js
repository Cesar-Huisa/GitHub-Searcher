import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';


var a = document.getElementById('tfnewsearch');
a.addEventListener('submit',function(e) {
    e.preventDefault();
    var b = document.getElementById('tftextinput').value.search;
    ReactDOM.render(<Search name={b}/>, document.getElementById('tftextinput'));
});


const app=document.getElementById('root');
ReactDOM.render(<App />, app);
