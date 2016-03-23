import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';


@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  template: `
    <div class="list-group">
      <keg-display *ngFor="#currentKeg of kegList" [keg]="currentKeg" class="list-group-item"></keg-display>
    </div>
    <new-keg (newKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];

  createKeg(values) {
    var keg = new Keg(values[0], values[1], values[2], values[3], this.kegList.length);
    this.kegList.push(keg);
  }
}
