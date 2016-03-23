import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent],
  template: `
    <div class="list-group">
      <keg-display *ngFor="#currentKeg of kegList" [keg]="currentKeg" class="list-group-item"></keg-display>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
}
