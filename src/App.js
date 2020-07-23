import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// import * as pages from './pages';
import TelaInicial from './pages/TelaInicial';
import TelaJogo from './pages/TelaJogo';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';


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
