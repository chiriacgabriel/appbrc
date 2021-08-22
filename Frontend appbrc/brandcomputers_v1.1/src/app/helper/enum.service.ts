import { Injectable } from '@angular/core';
import {EnumCategory} from '../model/enum/EnumCategory';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  getValues(enumValue: any): string[] {
    return Object.keys(enumValue).map(key => enumValue[key]).filter(k => !(parseInt(k) >= 0));
  }

  getKeys(enumParsed: any, category: string): string{
    let name: string;

    for (const n in enumParsed) {
      if (enumParsed[n] === category) {
        name = n;
      }
    }
    return name;
  }
}
