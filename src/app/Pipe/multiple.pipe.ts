import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(num1:number,num2:number,num3:number): unknown {
    let multi= num1*num2*num3
    return multi;
  }

}
