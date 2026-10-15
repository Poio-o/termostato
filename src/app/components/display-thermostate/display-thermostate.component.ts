import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css',
  host: {
    '[class.warning]': 'alarm'
  }
})
export class DisplayThermostateComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperatureInput']) {
      let temperature = changes['temperatureInput'].currentValue;
      this.alarm = (temperature > this.umbralInput())
    }
  }

  temperatureInput = input.required<number>()
  umbralInput = input.required<number>()

  alarm = false
}
