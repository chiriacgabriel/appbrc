import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  getValues(enumValue: any): string[] {
    return Object.keys(enumValue).map(key => enumValue[key]).filter(k => !(parseInt(k) >= 0));
  }
}
