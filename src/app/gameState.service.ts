import { EventEmitter } from "@angular/core";





interface PositionObj {
    x: 0 | 1 | 2,
    y: 0 | 1 | 2
}

class GameBoard {

    private board:number[][] = [
        [],
        [],
        []
    ]

    getBoard = () => {
        return this.board
    }
    setBoard = (pos:PositionObj,newValue:number) => {
        this.board[pos.x][pos.y] = newValue
    }

    getColumnScore = (column:0|1|2) => {
        return this.getBoard()[column].reduce((accu, curr, i, arr) => {
            return accu + (curr * arr.filter(number => number == curr).length)
        },0)
    }

    getTotalScore = () => {
        return this.getColumnScore(0)
        + this.getColumnScore(1)
        + this.getColumnScore(2)
    }
}




export class GameState {

    public DieWasRolled: EventEmitter<number | null> = new EventEmitter;

    private currentTurn:"player" | "computer" = "player"

    private currDiceValue:number | null = null;

    private playerBoard = new GameBoard()
    private computerBoard = new GameBoard()

    getPlayerBoard = () => {
        return this.playerBoard.getBoard()
    }

    getComputerBoard = () => {
        return this.computerBoard.getBoard()
    }

    setPlayerBoard = (pos:PositionObj,newValue:number) => {
        this.playerBoard.setBoard(pos,newValue)
    }

    setComputerBoard = (pos:PositionObj,newValue:number) => {
        this.computerBoard.setBoard(pos,newValue)
    }

    getCurrDiceValue = () => {
        return this.currDiceValue
    }

    setCurrDiceValue = (wipeValue:boolean) => {
        wipeValue == true ? this.currDiceValue = null : this.currDiceValue = Math.ceil(Math.random() * 6)
        this.DieWasRolled.emit(this.currDiceValue);
    }

    getPlayerColumnScore = (col:0|1|2) => {
        return this.playerBoard.getColumnScore(col)
    }

    getComputerColumnScore = (col:0|1|2) => {
        return this.computerBoard.getColumnScore(col)
    }

    getTotalPlayerScore = () => {
        return this.playerBoard.getTotalScore()
    }

    getTotalComputerScore = () => {
        return this.computerBoard.getTotalScore()
    }
}