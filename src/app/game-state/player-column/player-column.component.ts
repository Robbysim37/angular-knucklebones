import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnChanges{

  constructor(private gameState:GameState){}

  currDiceValue = this.gameState.getCurrDiceValue()

  ngOnChanges(changes: SimpleChanges): void {
      this.currDiceValue = this.gameState.getCurrDiceValue()
  }
}
