import { EventEmitter } from "@angular/core";






class GameBoard {

    private board:number[][] = [
        [],
        [],
        []
    ]

    getBoard = () => {
        return this.board
    }
    setBoard = (column:number,newValue:number | null) => {
        if(newValue !== null){
            this.board[column].push(newValue)
        }
    }

    getColumnScore = (column:number) => {
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

    setPlayerBoard = (column:number) => {
        this.playerBoard.setBoard(column,this.currDiceValue)
    }

    setComputerBoard = (column:number,newValue:number) => {
        this.computerBoard.setBoard(column,newValue)
    }

    getCurrDiceValue = () => {
        return this.currDiceValue
    }

    setCurrDiceValue = (wipeValue:boolean) => {
        wipeValue == true ? this.currDiceValue = null : this.currDiceValue = Math.ceil(Math.random() * 6)
        this.DieWasRolled.emit(this.currDiceValue);
    }

    getPlayerColumnScore = (col:number) => {
        return this.playerBoard.getColumnScore(col)
    }

    getComputerColumnScore = (col:number) => {
        return this.computerBoard.getColumnScore(col)
    }

    getTotalPlayerScore = () => {
        return this.playerBoard.getTotalScore()
    }

    getTotalComputerScore = () => {
        return this.computerBoard.getTotalScore()
    }
}