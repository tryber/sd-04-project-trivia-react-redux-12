import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import Feedback from './pages/Feedback';

function App() {
  return (
    <header className="Container">
      {/* <Ranking /> */}
      <Feedback />
    </header>
>>>>>>> 7b5664065d1c60a2477ca85e1cc6b90f0353098a
  );
}

export default App;
