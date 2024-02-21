import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnInit, OnDestroy{

  constructor(private gameState:GameState){}

  @Input() player: "human" | "computer" = "human"

  currDice = this.gameState.getCurrDiceValue()
  totalScore = this.player === "human" ? this.gameState.getTotalHumanScore() : this.gameState.getTotalComputerScore

  
  ngOnInit(): void {
      this.gameState.DieWasRolled.subscribe((newDice) => this.currDice = newDice);
      if(this.player === "human"){
        this.gameState.ScoreUpdate.subscribe((newScore) => this.totalScore = newScore);
      }else{
        this.gameState.ComputerScoreUpdate.subscribe(newScore => this.totalScore = newScore)
      }
  }

  ngOnDestroy(): void {
      this.gameState.DieWasRolled.unsubscribe();
      this.gameState.ScoreUpdate.unsubscribe();
      this.gameState.ComputerScoreUpdate.unsubscribe();
  }
}
