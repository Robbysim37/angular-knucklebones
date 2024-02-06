export class GameState {
    private gameBoard = [
        [6,6,6],
        [4,5,6],
        [7,8,9]
    ]

    //change the following function to double and triple dice values when calculating score

    getGameBoard = () => {
        return this.gameBoard
    }

    getColumnScore = (column:0|1|2) => {
        return this.gameBoard[column].reduce((accu, curr, i, arr) => {
            return accu + (curr * arr.filter(number => number == curr).length)
        },0)
    }

    getTotalScore = () => {
        return this.getColumnScore(0)
        + this.getColumnScore(1)
        + this.getColumnScore(2)
    }
}