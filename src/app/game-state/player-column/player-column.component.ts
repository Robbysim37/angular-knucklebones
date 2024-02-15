import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnInit, OnDestroy{

  constructor(private gameState:GameState){}

  currDiceValue = this.gameState.getCurrDiceValue()
  
  ngOnInit(): void {
      this.gameState.DieWasRolled.subscribe((die) => this.currDiceValue = die);
  }

  ngOnDestroy(): void {
      this.gameState.DieWasRolled.unsubscribe()
  }
}
