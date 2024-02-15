import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameState } from '../../gameState.service';

@Component({
  selector: 'app-player-column',
  templateUrl: './player-column.component.html',
  styleUrl: './player-column.component.css'
})
export class PlayerColumnComponent implements OnInit, OnDestroy{

  constructor(private gameState:GameState){}

  state = this.gameState
  
  ngOnInit(): void {
      this.gameState.UpdateState.subscribe((newState) => this.state = newState);
      
  }

  ngOnDestroy(): void {
      this.gameState.UpdateState.unsubscribe()
  }
}
