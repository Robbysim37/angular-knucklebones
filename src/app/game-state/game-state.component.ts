import { Component } from '@angular/core';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrl: './game-state.component.css'
})
export class GameStateComponent {
  gameBoard = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  currDiceValue:number = 0
}
