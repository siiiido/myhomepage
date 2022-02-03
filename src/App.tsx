import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom'
import Main from './screens/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
