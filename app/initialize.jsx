import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Counter from './components/counter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Work from './components/Work';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route path="/:filter?" component={Counter} />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
