/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {VotingContainer} from './components/Voting';

import reducer from './redux/reducer';

import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_NAMES',
  first: 'foobar',
  second: 'barfoo',
});

const votingFunc = () => {
  return <VotingContainer ></VotingContainer>;
};

const retard = () => {
  return <div>retard</div>;
};

const App =
  <Provider
    store={ store }
  >
    <Router>
      <div>
        <ul>
          <li><Link
            to='/'
          >
            voting
          </Link></li>
          <li><Link
            to='/retard'
          >
            Retard
          </Link></li>
        </ul>

        <Route
          exact
          path='/'
          component={ votingFunc }
        />
        <Route
          path='/retard'
          component={ retard }
        />
      </div>
    </Router>
  </Provider>;

ReactDOM.render(App, document.getElementById('app'));

