export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public ABV: number, public id: number){}
  getPercentage(){
    return ((this.pints)/124 * 100).toFixed(1);
  }
}
