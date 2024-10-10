import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickCounterComponentComponent } from './click-counter-component/click-counter-component.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { FormsModule } from '@angular/forms';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountingCharactersComponent } from './counting-characters/counting-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickCounterComponentComponent,
    SimpleCalculatorComponent,
    CountdownTimerComponent,
    CountingCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
