import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormator'
})
export class DateFormatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
