import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent implements OnChanges {
  @Input() diceValue: number | null = null;
  imgPath:string = ``
  

ngOnChanges(changes: SimpleChanges): void {
  this.imgPath = `assets/dice/White_D${this.diceValue}.png`
}
}
