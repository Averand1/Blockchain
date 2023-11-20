import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Market from './components/Market';
import Exchange from './components/Exchange';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/market" component={Market} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </Router>
  );
};

export default Routes;