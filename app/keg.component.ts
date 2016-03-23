import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
var percent = 0;

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  outputs: ['onKegSelect'],
  template: `
    <div (click)="kegClicked(keg)" class="col-sm-8">
      <h4 class="list-group-item-heading">{{ keg.brand }} {{ keg.name }} </h4>
      <p class="list-group-item-text">Price: \${{ keg.price }}</p>
      <p class="list-group-item-text">ABV: {{keg.ABV}}%</p>
      <p class="list-group-item-text">Remaining: {{ keg.pints }} Pints</p>
    </div>
    <div class="col-sm-2">
      <h4>{{ keg.getPercentage() }}% Remaining</h4>
      <h4>{{ empty }}</h4>
    </div>
    <div class="col-sm-2">
      <button (click)="kegTapped(keg)"><img src="./resources/images/tap.jpg" class="beer"></button>
    </div>
  `
})

export class KegComponent {
  public selectedKeg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public empty: string;
  //;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(keg: Keg) {
    this.onKegSelect.emit(keg);
  }
  kegTapped(keg: Keg) {
    if(keg.pints > 0) {
      keg.pints--;
      this.empty = "Sell More Beer!";
    } else {
      this.empty = "Keg is Empty!";
    }

  }
}
