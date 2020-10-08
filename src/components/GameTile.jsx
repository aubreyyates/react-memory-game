import React from 'react';
import '../css/GameTile.css';

class GameTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        let classForButton = "game-tile " + this.props.value;
        let text = '';
        if (this.props.value == 'highlight-button') {
            text = this.props.numberToShow;
        }
        return (
            <button onClick={this.onButtonClick}
                className={classForButton}>
                <div>
                    <p>{text}</p>
                </div>
            </button>
        );
    }

    onButtonClick() {
        this.props.gameTileButtonPress(this.state.id);
    }
}

export default GameTile;