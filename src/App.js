import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import Documents from './documents/Container';
import Home from './home';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${routes.HOME}`}>
          <Home/>
        </Route>
        <Route exact path={`${routes.DOCUMENTS}`}>
          <Documents/>
        </Route>
        <Route path="*">
          <Redirect to={`${routes.HOME}`} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
