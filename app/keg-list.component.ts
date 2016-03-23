import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { BrandPipe } from './brand.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [BrandPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
    <div class="row">
      <div class="col-md-8">
        <div class="list-group">
          <keg-display
            *ngFor="#currentKeg of kegList | brand:chosenBrand"
            [keg]="currentKeg"
            class="list-group-item"
            [class.active]="currentKeg === selectedKeg"
            (onKegSelect)="kegToEdit($event)">
          </keg-display>
        </div>
      </div>
      <div class="col-md-4">
        <input type="text" class="input-lg" placeholder="Brand" #searchBrand>
        <button class="btn-lg" (click)="search(searchBrand)">Search</button>
        <hr>
        <new-keg (newKeg)="createKeg($event)"></new-keg>
        <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
      </div>
    </div>



  `
})

export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  public chosenBrand = '';
  createKeg(values) {
    var keg = new Keg(values[0], values[1], values[2], values[3], this.kegList.length);
    this.kegList.push(keg);
  }
  kegToEdit(thisKeg: Keg) {
    this.selectedKeg = thisKeg;
    console.log(thisKeg);
  }
  search(searchBrand: HTMLInputElement) {
    this.chosenBrand = searchBrand.value;
    searchBrand.value = "";
  }

}
