import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TelaInicial from './Pages/TelaInicial';
import TelaJogo from './Pages/TelaJogo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TelaInicial} />
        <Route path="/game" component={TelaJogo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
