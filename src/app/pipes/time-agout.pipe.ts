import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns'
@Pipe({
  name: 'timeAgout'
})
export class TimeAgoutPipe implements PipeTransform {

  transform(value: Date): unknown {
    return formatDistance(new Date(), value);
  }

}
