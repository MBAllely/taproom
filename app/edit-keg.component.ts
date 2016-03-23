import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <div class="keg-form form-inline">
      <input [(ngModel)]="keg.name" type="text" class="form-control input-lg">
      <input [(ngModel)]="keg.brand" type="text" class="form-control input-lg">
      <div class="input-group input-group-lg">
        <span class="input-group-addon">$</span>
        <input [(ngModel)]="keg.price" type="number" class="form-control">
      </div>
      <div class="input-group input-group-lg">
        <input [(ngModel)]="keg.ABV" type="number" class="form-control">
        <span class="input-group-addon">%</span>
      </div>
    </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
