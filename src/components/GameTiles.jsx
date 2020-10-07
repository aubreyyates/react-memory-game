import React from 'react';
import GameTile from './GameTile.jsx';
import '../css/GameTiles.css';

function RenderGameTile(i) {
    return <GameTile value={i} />;
}

function GameTiles() {
    return (
        <div>
            <div className="board-row">
                {RenderGameTile(0)}
                {RenderGameTile(1)}
                {RenderGameTile(2)}
                {RenderGameTile(3)}
            </div>
            <div className="board-row">
                {RenderGameTile(3)}
                {RenderGameTile(4)}
                {RenderGameTile(5)}
                {RenderGameTile(3)}
            </div>
            <div className="board-row">
                {RenderGameTile(6)}
                {RenderGameTile(7)}
                {RenderGameTile(8)}
                {RenderGameTile(3)}
            </div>
            <div className="board-row">
                {RenderGameTile(6)}
                {RenderGameTile(7)}
                {RenderGameTile(8)}
                {RenderGameTile(3)}
            </div>
        </div>
    );
}

export default GameTiles;