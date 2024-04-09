import { Component, Input, OnInit } from '@angular/core';
import { GameState } from '../../../gameState.service';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.css'
})
export class BoardColumnComponent {

  constructor(private gameState:GameState){}

  @Input() boardColumnData: Array<number> = []
  @Input() column:number = 0
  @Input() player:"human" | "computer" = "human"

  placeDice = (player:"human" | "computer") => {
    if(player === "human" && this.gameState.getCurrDiceValue()){
      if(this.boardColumnData.length < 3){
        this.gameState.setHumanBoard(this.column)
        this.gameState.setCurrDiceValue(true)
        setTimeout(() => {
          this.gameState.computerPlays()
        },1500)
      }
    }
  }
}