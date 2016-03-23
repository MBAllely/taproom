import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h4 class="list-group-item-heading">{{ keg.name }} - {{keg.ABV}}% abv</h4>
    <p class="list-group-item-text">Brand: {{ keg.brand }}</p>
    <p class="list-group-item-text">Price: {{ keg.price }}</p>
    <p class="list-group-item-text">Remaining: {{ keg.pints }} Pints</p>
  `
})

export class KegComponent {
  public keg: Keg;
}
