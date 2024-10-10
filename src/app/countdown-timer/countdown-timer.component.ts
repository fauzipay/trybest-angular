import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent {
  time: number = 0;
  remainingTime: number | null = null;
  intervalId: any = null;

  startCountdown(): void {
    this.remainingTime = this.time;
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.remainingTime && this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

}
