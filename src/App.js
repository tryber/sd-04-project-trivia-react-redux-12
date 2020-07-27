import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import TelaInicial from './Pages/TelaInicial';
import TelaJogo from './Pages/TelaJogo';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TelaInicial} />
        <Route path="/game" component={TelaJogo} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
