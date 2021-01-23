import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import First from './FirstPage';
import SecondPage from './SecondPage';


const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={First} />
        <Route path="/happyBirthday" exact component={SecondPage} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;