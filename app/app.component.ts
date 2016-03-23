import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="jumbotron">
    <h1>Keg Inventory Tracker</h1>
  </div>
  <div class="container">
    <keg-list [kegList]="kegs"> </keg-list>
  <div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("White", "Alaskan", 180, 5.3, 0),
      new Keg("Amber", "Alaskan", 180, 5.3, 1),
      new Keg("Nocturnum", "Delirium", 600, 8.5, 2),
      new Keg("Mirror Pond", "Deschutes", 180, 5, 3),
      new Keg("High Life", "Miller", 125, 4.7, 4),
      new Keg("Pear Cider", "Wyder's", 190, 4, 5),
      new Keg("ESB", "Fuller's", 235, 5.9, 6),
      new Keg("Stone Saison", "Stone Brewing", 330, 6, 7)
    ];
  }
}
