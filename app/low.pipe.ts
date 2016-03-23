import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "findLow",
  pure: false
})

export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    if(args[0] !== "low"){
      return input;
    } else {
      return input.filter((keg) => {
        return keg.pints <= 10;
      });
    }

  }
}
