import { Component, Input, OnInit } from '@angular/core';

import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent implements OnInit {

  constructor(private gameState:GameState){}

  ngOnInit(): void {
      console.log(this.gameState.getColumnScore(0))
  }

  gameBoard = this.gameState.getGameBoard()
}
