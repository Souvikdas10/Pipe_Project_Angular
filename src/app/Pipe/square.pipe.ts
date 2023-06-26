import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(num: number): number {
    //square
    let sqr=num**2
    return sqr;
// cube
    // let cub=num**3
    // return cub;

    
  }

}
