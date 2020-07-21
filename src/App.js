import React from 'react';
import './App.css';

import Ranking from './pages/Ranking';
import Feedback from './pages/Feedback';


function App() {
  return (
    <header className="Container">
      <Ranking />
      <Feedback />
    </header>
  );
}

export default App;
