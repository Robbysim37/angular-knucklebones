import { Component } from '@angular/core';
import { GameState } from '../../../gameState.service';

@Component({
  selector: 'app-roll-button',
  templateUrl: './roll-button.component.html',
  styleUrl: './roll-button.component.css'
})
export class RollButtonComponent {

  constructor(private gameState:GameState){}

  rollDice = () => {
    this.gameState.setCurrDiceValue(false)
  }
}
