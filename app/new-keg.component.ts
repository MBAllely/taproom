import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['newKeg'],
  template: `
  <div class="keg-form">
    <input placeholder="Name" type="text" class="input-lg" #newName>
    <input placeholder="Brand" type="text" class="input-lg" #newBrand>
    <input placeholder="Price" type="number" class="input-lg" #newPrice>
    <input placeholder="ABV" type="number" class="input-lg" #newABV>
    <button type="button" class="btn-lg" (click)="addKeg(newName, newBrand, newPrice, newABV)">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public newKeg: EventEmitter<Object[]>;
  constructor() {
    this.newKeg = new EventEmitter();
  }
  addKeg(name: HTMLInputElement, brand: HTMLInputElement, price: HTMLInputElement, ABV: HTMLInputElement) {
    console.log(name);
    this.newKeg.emit([name.value, brand.value, parseFloat(price.value), parseFloat(ABV.value)]);
    name.value = '';
    brand.value = '';
    price.value = '';
    ABV.value = '';
  }

}
