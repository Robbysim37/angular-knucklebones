import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameStateComponent } from './game-state/game-state.component';
import { GameBoardComponent } from './game-state/game-board/game-board.component';
import { BoardColumnComponent } from './game-state/game-board/board-column/board-column.component';
import { CellComponent } from './game-state/game-board/board-column/cell/cell.component';
import { PlayerColumnComponent } from './game-state/player-column/player-column.component';
import { IconComponent } from './game-state/player-column/icon/icon.component';
import { TotalScoreComponent } from './game-state/player-column/total-score/total-score.component';
import { HighlightDirective } from './highlight.directive';
import { RollButtonComponent } from './game-state/player-column/roll-button/roll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStateComponent,
    GameBoardComponent,
    BoardColumnComponent,
    CellComponent,
    PlayerColumnComponent,
    IconComponent,
    TotalScoreComponent,
    HighlightDirective,
    RollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
