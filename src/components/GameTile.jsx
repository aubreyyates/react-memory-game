import React from 'react';
import '../css/GameTile.css';

class GameTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <button className="game-tile" onClick={() => this.setState({ value: "X" })} >

            </button>
        );
    }
}

export default GameTile;