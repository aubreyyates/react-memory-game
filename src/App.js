import React from 'react';
import './css/App.css';
import MemoryGame from './components/MemoryGame.jsx'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-header-text">Memory Game</h1>
      </header>
      <div className='main-content'>
        <MemoryGame></MemoryGame>
      </div>
    </div >
  );
}

export default App;
