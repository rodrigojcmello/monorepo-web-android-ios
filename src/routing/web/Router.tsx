import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  );
}

export default Router;
