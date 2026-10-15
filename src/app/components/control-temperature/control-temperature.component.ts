import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperature',
  imports: [],
  templateUrl: './control-temperature.component.html',
  styleUrl: './control-temperature.component.css'
})
export class ControlTemperatureComponent {

  temperatureInput = input.required<number>()
  temperatureOutput = output<number>()
  umbralOutput = output<number>()

  tempUpdate?: number;

  onClickIncTemp() {
    this.tempUpdate = this.temperatureInput() + 1
    this.temperatureOutput.emit(this.tempUpdate)
  }

  onClickDecTemp() {
    this.tempUpdate = this.temperatureInput() - 1
    this.temperatureOutput.emit(this.tempUpdate)
  }

  onInput(event: Event) {
   let inputElement = event.target as HTMLInputElement;

   try {
   let umbral = Number(inputElement.value);
   console.log(`Se establece nuevo: ${umbral}`)
   this.umbralOutput.emit(umbral)
   } catch(error) {
    inputElement.value = this.temperatureInput().toString();
   }
  }
}
