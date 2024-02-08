import { Component, OnChanges, OnInit, SimpleChanges,ViewChild } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnInit{

  constructor(private gameState:GameState){}

  @ViewChild('test') currDiceValue = this.gameState.getCurrDiceValue()
  
  ngOnInit(): void {
      console.log(this.currDiceValue)
  }
}
