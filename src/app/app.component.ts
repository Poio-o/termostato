import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlTemperatureComponent } from './components/control-temperature/control-temperature.component';
import { DisplayThermostateComponent } from './components/display-thermostate/display-thermostate.component';

@Component({
  selector: 'app-root',
  imports: [ControlTemperatureComponent, DisplayThermostateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'termostato';

  temperature = 20;
  umbral = 25;

  onCambioTemperaturaOutput(temp:number){
    this.temperature = temp;
  }

  onCambioUmbralOutput(umbr:number) {
    this.umbral = umbr;
  }
}
