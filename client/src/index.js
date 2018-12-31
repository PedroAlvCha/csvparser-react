import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { default as App} from './components/App.js';
import registerServiceWorker from './serviceWorker';
import makeStore from './store/store.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

require('dotenv').config()

export const store = makeStore();

ReactDOM.render(  
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
	    <Route key="no-category" path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();

/*<App />
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
	    <Route key="no-category" path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  */
