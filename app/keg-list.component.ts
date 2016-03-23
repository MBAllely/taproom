import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';


@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['sendKegToEdit'],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
    <new-keg (newKeg)="createKeg($event)"></new-keg>
    <div class="list-group">
      <keg-display
        *ngFor="#currentKeg of kegList"
        [keg]="currentKeg"
        class="list-group-item"
        [class.active]="currentKeg === selectedKeg"
        (onKegSelect)="kegToEdit($event)">
      </keg-display>
    </div>
    <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  //public sendKegToEdit: EventEmitter<Keg>;
  public selectedKeg: Keg;
  // constructor() {
  //   this.sendKegToEdit = new EventEmitter();
  // }
  createKeg(values) {
    var keg = new Keg(values[0], values[1], values[2], values[3], this.kegList.length);
    this.kegList.push(keg);
  }
  kegToEdit(thisKeg: Keg) {
    this.selectedKeg = thisKeg;
    //this.sendKegToEdit.emit(thisKeg);
    console.log(thisKeg);
  }

}
