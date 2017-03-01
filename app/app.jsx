/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
