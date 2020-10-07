import React from 'react';
import '../css/MemoryGame.css';
import GameTiles from './GameTiles.jsx';

function MemoryGame() {
    return (
        <div className="memory-game-container">
            <GameTiles></GameTiles>
        </div>
    );
}

export default MemoryGame;