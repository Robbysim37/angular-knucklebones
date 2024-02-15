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

  placeDice = () => {
    this.gameState.setPlayerBoard(this.column)
    this.gameState.setCurrDiceValue(true)
  }
}