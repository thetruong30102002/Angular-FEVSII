// src/app/vietnam-currency.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vietnamCurrency',
})
export class VietnamCurrencyPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    if (value == null || isNaN(value)) {
      return '';
    }
    return value.toLocaleString('vi-VN');
  }
}
