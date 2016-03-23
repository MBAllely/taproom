import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'edit-keg',
  inputs: ['selectedKeg'],
  template: `
    <div class="keg-form">
      <input [(ngModel)]="selectedKeg.name" type="text" class="input-lg">
      <input [(ngModel)]="selectedKeg.brand" type="text" class="input-lg">
      <input [(ngModel)]="selectedKeg.price"type="number" class="input-lg">
      <input [(ngModel)]="selectedKeg.ABV" type="number" class="input-lg">
    </div>
  `
})

export class EditKegComponent {
  public selectedKeg: Keg;
}
