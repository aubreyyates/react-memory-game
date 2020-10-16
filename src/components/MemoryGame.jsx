import React from 'react';
import '../css/MemoryGame.css';
import GameTiles from './GameTiles.jsx';


class MemoryGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            listening: false,

            button: "Start",
            score: 0,
            sqaureToLightUp: -1,
            numberToShow: -1,
            storedSequence: [],
            clickNumber: 0

        };
        this.startButtonPress = this.startButtonPress.bind(this);
        this.gameTileButtonPress = this.gameTileButtonPress.bind(this);

    }

    render() {
        return (
            <div id='memory-game-container' className="memory-game-container">
                <div className='game-controls'>
                    <div className='score-counter'>{this.state.score}</div>
                    <button onClick={this.startButtonPress} id='start-button' className='game-controls-button'>{this.state.button}</button>
                </div>
                <div className='game-message-container'><p id='game-message'></p></div>
                <GameTiles listening={this.state.listening} gameTileButtonPress={this.gameTileButtonPress} sqaureToLightUp={this.state.sqaureToLightUp} numberToShow={this.state.numberToShow}></GameTiles>
            </div>
        );
    }

    startButtonPress() {

        this.resetBoard();

        if (this.state.playing == false) {
            this.setState({
                playing: true,
                button: "Reset"
            });
            this.startGame();
        } else {
            this.resetGame();
        }
    }

    startGame() {
        let squaresLeftToLightUp = this.state.score + 1;
        this.lightUpRandomSqaureSequence(squaresLeftToLightUp);
        let gameMessage = document.getElementById("game-message");
        gameMessage.textContent = "Wait";
        gameMessage.style.display = "block";
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
                sqaureToLightUp: -1,
                listening: true
            });
            let gameMessage = document.getElementById("game-message");
            gameMessage.style.color = "#1ce63c"
            gameMessage.textContent = "Go";
            gameMessage.style.display = "block";
        }

    }

    lightUpRandomSqaure(squaresLeftToLightUp) {
        let randomSquareNumber = this.getRandomInt(16);
        let numberToShow = (this.state.score + 2) - squaresLeftToLightUp;
        this.state.storedSequence.push(randomSquareNumber);
        this.setState({
            sqaureToLightUp: randomSquareNumber,
            numberToShow: numberToShow,
            listening: false
        });
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    gameTileButtonPress(buttonValue) {
        if (this.state.listening == true) {
            if (this.state.storedSequence[this.state.clickNumber] == buttonValue) {
                if ((this.state.clickNumber + 1) == this.state.storedSequence.length) {
                    this.state.score += 1;
                    this.state.clickNumber = 0;
                    this.state.storedSequence = [];
                    let squaresLeftToLightUp = this.state.score + 1;
                    this.lightUpRandomSqaureSequence(squaresLeftToLightUp);
                    let gameMessage = document.getElementById("game-message");
                    gameMessage.style.color = "#ca1313"
                    gameMessage.textContent = "Wait";
                } else {
                    this.state.clickNumber += 1;
                }
            } else {
                this.gameOver();
                this.resetGame();
            }
        }
    }

    gameOver() {
        let memoryGameContainer = document.getElementById("memory-game-container");
        let gameMessage = document.getElementById("game-message");
        gameMessage.style.color = "#ca1313"
        memoryGameContainer.style.border = "3px solid rgb(202, 19, 19)";
        if (this.state.score < 2) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score + ". Your memory is not the best.";
        } else if (this.state.score >= 2 && this.state.score < 5) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score
        } else if (this.state.score >= 5 && this.state.score < 9) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score + ". Your memory is pretty good.";
        } else if (this.state.score >= 9 && this.state.score < 12) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score + ". Your memory is very good. Impressive.";
        } else if (this.state.score >= 12 && this.state.score < 16) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score + ". Your memory is insanely good! How did you do that?";
        } else if (this.state.score >= 16) {
            gameMessage.textContent = "Game Over! Score: " + this.state.score + ". You must be able to remember everything? Only legends score that high.";
        }

        gameMessage.style.display = "block";
    }

    resetBoard() {
        let memoryGameContainer = document.getElementById("memory-game-container");
        let gameMessage = document.getElementById("game-message");
        memoryGameContainer.style.border = "none";
        gameMessage.style.color = "#ca1313"
        gameMessage.style.display = "none";
    }

    resetGame() {
        this.setState({
            playing: false,
            button: "Start",
            score: 0,
            storedSequence: [],
            clickNumber: 0,
            listening: false
        });
        // this.storedSequence = [];
        // this.clickNumber = 0;
    }
}




export default MemoryGame;