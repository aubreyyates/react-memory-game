import React from 'react';
import GameTile from './GameTile.jsx';
import '../css/GameTiles.css';



class GameTiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sqaureToLightUp: this.props.sqaureToLightUp,
            numberToShow: this.props.numberToShow
        }

    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.RenderGameTile(0)}
                    {this.RenderGameTile(1)}
                    {this.RenderGameTile(2)}
                    {this.RenderGameTile(3)}
                </div>
                <div className="board-row">
                    {this.RenderGameTile(4)}
                    {this.RenderGameTile(5)}
                    {this.RenderGameTile(6)}
                    {this.RenderGameTile(7)}
                </div>
                <div className="board-row">
                    {this.RenderGameTile(8)}
                    {this.RenderGameTile(9)}
                    {this.RenderGameTile(10)}
                    {this.RenderGameTile(11)}
                </div>
                <div className="board-row">
                    {this.RenderGameTile(12)}
                    {this.RenderGameTile(13)}
                    {this.RenderGameTile(14)}
                    {this.RenderGameTile(15)}
                </div>
            </div>
        );
    }

    RenderGameTile(i) {
        let classToAdd = "no-class";

        if (i == this.props.sqaureToLightUp) {
            classToAdd = "highlight-button";
        }

        return <GameTile value={classToAdd} id={i} gameTileButtonPress={this.props.gameTileButtonPress} numberToShow={this.props.numberToShow} />;
    }


}

export default GameTiles;