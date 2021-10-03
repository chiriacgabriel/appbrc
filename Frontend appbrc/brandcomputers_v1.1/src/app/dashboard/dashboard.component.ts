import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {DateSelector, TransformDateService} from '../helper/transform-date.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  today: Date;
  currentWeek: DateSelector;
  currentMonth: DateSelector;

  constructor(public datePipe: DatePipe,
              private transformDate: TransformDateService) {
    this.today = new Date();
  }

  public ngOnInit() {

  }

  show(event) {
    let stringToday = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    let stringStartDateOfWeek = this.datePipe.transform(this.transformDate.previousMonday(new Date()), 'yyyy-MM-dd');
    let stringStartDateOfMonth = this.datePipe.transform(this.transformDate.startOfCurrentMonth(new Date()), 'yyyy-MM-dd');

    switch (event.target.value){
      case 'today':
        console.log(stringToday);
        break;
      case 'currentWeek':
        this.currentWeek = this.transformDate.setWeek(stringStartDateOfWeek, stringToday);
        console.log(this.currentWeek);
        break;
      case 'currentMonth':
        this.currentMonth = this.transformDate.setMonth(stringStartDateOfMonth, stringToday);
        console.log(this.currentMonth);
        break;
    }
  }
}
