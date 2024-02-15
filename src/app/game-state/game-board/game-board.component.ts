import { Component, Input } from '@angular/core';

import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  constructor(private gameState:GameState){}

  @Input() player: "human" | "computer" = "human"

  state = this.gameState
}
