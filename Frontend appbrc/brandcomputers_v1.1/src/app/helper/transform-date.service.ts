import { Injectable } from '@angular/core';

export interface DateSelector {
  startDate: string,
  endDate: string
}

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

  public setWeek(start: string, end: string): DateSelector {
    let currentWeek = {
      startDate: start,
      endDate: end
    }
    return currentWeek;
  }

  public setMonth(start: string, end: string): DateSelector {
    let currentMonth = {
      startDate: start,
      endDate: end
    }
    return currentMonth;
  }
}
