import React from 'react';
import ReactDOM from 'react-dom';
//import { hashHistory } from 'react-router';
import {HashRouter,
  Switch,
  Route,
  Link } from 'react-router-dom';

import App from './App/Components/App.jsx';
import Profile from './App/Components/Profile.jsx';
import Contact from './App/Components/Contact.jsx';
import Error from './App/Components/404.jsx';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={Profile}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </HashRouter>
  , document.getElementById('app')
);

