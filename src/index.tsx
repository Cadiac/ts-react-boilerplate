import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import store from './store';
import history from './history';

import HelloPage from './pages/HelloPage';
import AboutPage from './pages/AboutPage';
import TopicsPage from './pages/TopicsPage';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={HelloPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/topics" component={TopicsPage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
