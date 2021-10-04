import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformDateService {

  constructor() { }

  //set first day of the week to Monday
  private previousMondayAsNumber(date: Date): number{
    return date.getDay() === 0 ? -6 : 1;
  }

  //difference between currentDate and previous Monday
  private calculateDifference(date: Date): number {
    return date.getDate() - date.getDay() + this.previousMondayAsNumber(date)
  }

  public previousMonday(date: Date): Date {
    return new Date(date.setDate(this.calculateDifference(date)));
  }

  public startOfCurrentMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  public startOfPastMonth(date: Date): Date {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;

    return new Date(year, month, 1);
  }

  public lastDayOfPastMonth(date: Date): Date {
    const year = date.getFullYear();
    const month = date.getMonth();
    let temp = new Date(year, month);
    temp.setDate(0);
    temp.setHours(0,0,0,0);

    return temp;
  }


}
