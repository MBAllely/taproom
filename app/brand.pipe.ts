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
        var brand = keg.brand.toLowerCase();
        var searchString = args[0].toLowerCase();
        var name = keg.name.toLowerCase();
        return (brand.includes(searchString) || name.includes(searchString));
      });
    }
  }
}
