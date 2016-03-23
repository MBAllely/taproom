import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "premium",
  pure: false
})

export class PremiumPipe implements PipeTransform {
  transform(input: Keg) {
    return input.getPintPrice() > 7;
  }
}
