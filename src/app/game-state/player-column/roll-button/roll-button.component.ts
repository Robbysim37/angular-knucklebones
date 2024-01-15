import { Component } from '@angular/core';

@Component({
  selector: 'app-roll-button',
  templateUrl: './roll-button.component.html',
  styleUrl: './roll-button.component.css'
})
export class RollButtonComponent {

  rollDice = () => {
    console.log(Math.ceil(Math.random() * 6))
  }
}
