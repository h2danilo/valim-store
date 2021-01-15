import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route patch="/" exact component={Home} />
      <Route patch="/Cart" component={Cart} />
    </Switch>
  );
}
