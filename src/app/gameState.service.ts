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
    public ScoreUpdate: EventEmitter<number> = new EventEmitter;

    public UpdateState: EventEmitter<GameState> = new EventEmitter;

    private currentTurn:"human" | "computer" = "human"

    private currDiceValue:number | null = null;

    private humanBoard = new GameBoard()
    private computerBoard = new GameBoard()

    getHumanBoard = () => {
        return this.humanBoard.getBoard()
    }

    getComputerBoard = () => {
        return this.computerBoard.getBoard()
    }

    setHumanBoard = (column:number) => {
        this.humanBoard.setBoard(column,this.currDiceValue)
        this.UpdateState.emit(this)
    }

    setComputerBoard = (column:number) => {
        this.computerBoard.setBoard(column,this.currDiceValue)
    }

    getCurrDiceValue = () => {
        return this.currDiceValue
    }

    setCurrDiceValue = (wipeValue:boolean) => {
        wipeValue == true ? this.currDiceValue = null : this.currDiceValue = Math.ceil(Math.random() * 6)
        this.UpdateState.emit(this);
    }

    getHumanColumnScore = (col:number) => {
        return this.humanBoard.getColumnScore(col)
    }

    getComputerColumnScore = (col:number) => {
        return this.computerBoard.getColumnScore(col)
    }

    getTotalHumanScore = () => {
        return this.humanBoard.getTotalScore()
    }

    getTotalComputerScore = () => {
        return this.computerBoard.getTotalScore()
    }
}