import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { device } from 'platform';

import * as parse from 'date-fns/parse';
import * as isToday from 'date-fns/is_today';
import * as isYesterday from 'date-fns/is_yesterday';

@Pipe({
  name: 'shortWhen',
  pure: true
})
export class ShortWhenPipe implements PipeTransform {

  transform(value: number | string | Date): string {
    let language = device.language;
    if (device.region) {
      language += `-${device.region}`;
    }
    const datePipe = new DatePipe(language);
    console.log(language);
    const parsedDate = parse(value);

    if (isToday(parsedDate)) {
      return datePipe.transform(parsedDate, 'shortTime');
    }

    if (isYesterday(parsedDate)) {
      return 'yesterday';
    }

    return datePipe.transform(parsedDate, 'shortDate');
  }
}
