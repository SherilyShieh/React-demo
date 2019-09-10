import React from 'react';
import ReactDOM from 'react-dom'; // 负责渲染
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './store/index';

// React负责逻辑控制
ReactDOM.render(<App />, document.getElementById('root'));
// redux更新状态
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')));
// ReactDOM.render(<h1>React</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
