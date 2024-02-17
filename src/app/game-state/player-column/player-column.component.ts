import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnInit, OnDestroy{

  constructor(private gameState:GameState){}

  currDice = this.gameState.getCurrDiceValue()
  totalScore = this.gameState.getTotalHumanScore()

  
  ngOnInit(): void {
      this.gameState.DieWasRolled.subscribe((newDice) => this.currDice = newDice);
      this.gameState.ScoreUpdate.subscribe((newScore) => this.totalScore = newScore);
  }

  ngOnDestroy(): void {
      this.gameState.DieWasRolled.unsubscribe();
      this.gameState.ScoreUpdate.unsubscribe();
  }
}
