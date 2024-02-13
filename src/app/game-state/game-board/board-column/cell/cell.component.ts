import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  @Input() diceValue: number | null = 0;

}
