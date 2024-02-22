import { Pipe, PipeTransform } from '@angular/core';
import { OptionConfigModel } from '../models/option-config.model';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'optionConfig',
})
export class OptionConfigPipe implements PipeTransform {
    constructor(private currencyPipe: CurrencyPipe) {}

    transform(value: OptionConfigModel, includePrice: boolean = true): unknown {
        const resultWithoutPrice = `Range: ${value.range} miles - Max speed: ${value.speed}`;
        return includePrice
            ? resultWithoutPrice + `- Cost: ${this.currencyPipe.transform(value.price)}`
            : resultWithoutPrice;
    }
}
