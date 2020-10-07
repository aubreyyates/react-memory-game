import React from 'react';
import '../css/MemoryGame.css';
import GameTiles from './GameTiles.jsx';


class MemoryGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            button: "Start",
            score: 5,
            sqaureToLightUp: -1,
            numberToShow: -1
        };
        this.startButtonPress = this.startButtonPress.bind(this);
    }

    render() {
        return (
            <div className="memory-game-container">
                <div className='game-controls'>
                    <div className='score-counter'>{this.state.score}</div>
                    <button onClick={this.startButtonPress} id='start-button' className='game-controls-button'>{this.state.button}</button>
                </div>
                <GameTiles sqaureToLightUp={this.state.sqaureToLightUp} numberToShow={this.state.numberToShow}></GameTiles>
            </div>
        );
    }

    startButtonPress() {
        if (this.state.playing == false) {
            this.setState({
                playing: true,
                button: "Reset"
            });
            this.startGame();
        } else {
            this.setState({
                playing: false,
                button: "Start",
                score: 5
            });
        }
    }

    startGame() {
        let squaresLeftToLightUp = this.state.score + 1;
        this.lightUpRandomSqaureSequence(squaresLeftToLightUp);
    }

    lightUpRandomSqaureSequence(squaresLeftToLightUp) {
        let _this = this;
        if (squaresLeftToLightUp > 0) {
            this.lightUpRandomSqaure(squaresLeftToLightUp);
            setTimeout(function callSelf() {
                _this.lightUpRandomSqaureSequence(squaresLeftToLightUp - 1);
            }, 1000);
        } else {
            this.setState({
                sqaureToLightUp: -1
            });
        }
    }

    lightUpRandomSqaure(squaresLeftToLightUp) {
        let randomSquareNumber = this.getRandomInt(16);
        let numberToShow = (squaresLeftToLightUp - 7) * -1;
        this.setState({
            sqaureToLightUp: randomSquareNumber,
            numberToShow: numberToShow
        });
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}




export default MemoryGame;