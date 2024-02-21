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

    destroyDice = (column:number,diceValue:number | null) => {
        this.board[column] = this.board[column].filter(current => {
           return current === diceValue ? false : true 
        })
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

    availableColumns = () => {
        const possibleIndexes:number[] = []
        this.board.forEach((curr,i) => {
            if(curr.length < 3){
                possibleIndexes.push(i)
            }
        })
        return possibleIndexes
    }

    checkIfFull = () => {
        if( 
        this.board[0].length +
        this.board[1].length +
        this.board[2].length === 9){
            return true
        }else{
            return false
        }
    }
}




export class GameState {

    public DieWasRolled: EventEmitter<number | null> = new EventEmitter;
    public ScoreUpdate: EventEmitter<number> = new EventEmitter;
    public ComputerScoreUpdate: EventEmitter<number> = new EventEmitter;

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
        this.destroyOpponentsDice(true,column)
        if(this.humanBoard.checkIfFull()){
            alert(` Human Score:${this.humanBoard.getTotalScore()} - Computer Score:${this.computerBoard.getTotalScore()}`)
        }
        this.ScoreUpdate.emit(this.getTotalHumanScore())
    }

    setComputerBoard = (column:number) => {
        this.computerBoard.setBoard(column,this.currDiceValue)
        this.destroyOpponentsDice(false,column)
        this.ComputerScoreUpdate.emit(this.getTotalComputerScore())
    }

    getCurrDiceValue = () => {
        return this.currDiceValue
    }

    setCurrDiceValue = (wipeValue:boolean) => {
        wipeValue == true ? this.currDiceValue = null : this.currDiceValue = Math.ceil(Math.random() * 6)
        this.DieWasRolled.emit(this.currDiceValue);
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

    destroyOpponentsDice = (targetComputer:boolean,column:number) => {
        if(targetComputer){
            this.computerBoard.destroyDice(column,this.currDiceValue)
        }else{
            this.humanBoard.destroyDice(column,this.currDiceValue)
        }
    }

    computerPlays = () => {
        const openSpaces = this.computerBoard.availableColumns()
        const columnToPlayTo = Math.floor(Math.random() * openSpaces.length)
        const move = openSpaces[columnToPlayTo]
        this.setCurrDiceValue(false)
        this.setComputerBoard(move)
        this.setCurrDiceValue(true)
    }
}