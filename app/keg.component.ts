import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  outputs: ['onKegSelect'],
  template: `
    <div (click)="kegClicked(keg)">
      <h4 class="list-group-item-heading">{{ keg.brand }} {{ keg.name }} </h4>
      <p class="list-group-item-text">Price: \${{ keg.price }}</p>
      <p class="list-group-item-text">ABV: {{keg.ABV}}%</p>
      <p class="list-group-item-text">Remaining: {{ keg.pints }} Pints</p>
    </div>
  `
})

export class KegComponent {
  public selectedKeg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(keg: Keg) {
    this.onKegSelect.emit(keg);
  }
}
