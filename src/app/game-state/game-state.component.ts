import { Component, OnInit } from '@angular/core';
import { GameState } from '../gameState.service';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrl: './game-state.component.css',
  providers: [GameState]
})
export class GameStateComponent implements OnInit {

  constructor(private gameState:GameState) {}

  ngOnInit(): void {
      this.gameState = this.gameState
  }
}
