import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Todo from './todo';
import About from './about';

const Routes = () => {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/todos" component={Todo} />
        <Route exact path="/about" component={About} />
        <Redirect from="*" to="./todos" />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

