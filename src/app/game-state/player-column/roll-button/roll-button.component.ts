import { Component,OnDestroy,OnInit } from '@angular/core';
import { GameState } from '../../../gameState.service';

@Component({
  selector: 'app-roll-button',
  templateUrl: './roll-button.component.html',
  styleUrl: './roll-button.component.css'
})
export class RollButtonComponent implements OnInit, OnDestroy {

  constructor(private gameState:GameState){}

  currDice = this.gameState.getCurrDiceValue()
  imgPath:string = ``

  ngOnInit(): void {
    this.gameState.DieWasRolled.subscribe((newDice) => this.currDice = newDice);
  }

  ngOnDestroy(): void {
    this.gameState.DieWasRolled.unsubscribe();
  }

  rollDice = () => {
    this.gameState.setCurrDiceValue(false)
    this.imgPath = `assets/dice/White_D${this.currDice}.png`
  }
}
