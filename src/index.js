import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';
import TodoApp from './TodoApp';

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('container')
  );
registerServiceWorker();
