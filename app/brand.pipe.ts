import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "brand",
  pure: false
})

export class BrandPipe implements PipeTransform {
  transform(input: Keg[], args) {
    // var brand = ?;
    // var filterBrand = user input;
    // if()
    if(args[0] === "all" || args[0] === "") {
      return input;
    } else {
      return input.filter((keg) => {
        return keg.brand.includes(args[0]);
      });
    }
  }
}
