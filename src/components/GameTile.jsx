import React from 'react';
import '../css/GameTile.css';

class GameTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render() {
        let classForButton = "game-tile " + this.props.value;
        let text = '';
        if (this.props.value == 'highlight-button') {
            text = this.props.numberToShow;
        }
        return (
            <button className={classForButton}>
                <div>
                    <p>{text}</p>
                </div>
            </button>
        );
    }
}

export default GameTile;