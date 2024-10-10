import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter-component',
  templateUrl: './click-counter-component.component.html',
  styleUrls: ['./click-counter-component.component.css']
})
export class ClickCounterComponentComponent {
  count: number = 0;

  increment(){
    this.count++;
  }

  decrement(){
    if (this.count != 0) {
      this.count--;
    }
  }
}
