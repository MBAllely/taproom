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
      new Keg("Nocturnum", "Delirium", 600, 8.5, 1),
      new Keg("Mirror Pond", "Deschutes", 180, 5, 2),
      new Keg("High Life", "Miller", 125, 4.7, 3)
    ];
  }
}
