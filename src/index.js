import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<TodoApp />, document.getElementById('container'));
ReactDOM.render(
    <TodoApp/>,
    document.getElementById('container')
  );
registerServiceWorker();
