import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TransformDateService} from '../helper/transform-date.service';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {ReportsService} from '../services/reports/reports.service';
import {NirService} from '../services/accounting/nir.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../assets/css/_dashboard.css']
})
export class DashboardComponent implements OnInit {

  today: Date;

  stringToday: string;
  errorMessage = '';

  numberOfUnreceived: number;
  numberOfActiveUsers: number;

  componentsAdded: number;
  params = new HttpParams();

  constructor(public datePipe: DatePipe,
              private reportsService: ReportsService,
              private nirService: NirService,
              private transformDate: TransformDateService) {
    this.componentsAdded = 0;
    this.numberOfUnreceived = 0;
    this.today = new Date();
    this.stringToday = this.datePipe.transform(this.today, 'yyyy-MM-dd');
  }

  public ngOnInit() {
    this.params = this.params.set("startDate", this.stringToday).set("endDate", this.stringToday);
    this.getComponentsCount();
    this.unreceivedList();
    this.getNumberOfUsersOnline();
  }

  show(event) {

    let stringStartDateOfWeek = this.datePipe.transform(this.transformDate.previousMonday(new Date()), 'yyyy-MM-dd');
    let stringStartDateOfMonth = this.datePipe.transform(this.transformDate.startOfCurrentMonth(new Date()), 'yyyy-MM-dd');
    let stringStartDateOfPastMonth = this.datePipe.transform(this.transformDate.startOfPastMonth(new Date()), 'yyyy-MM-dd');
    let stringLastDateOfPastMonth = this.datePipe.transform(this.transformDate.lastDayOfPastMonth(new Date()), 'yyyy-MM-dd');

    switch (event.target.value){
      case 'today':
        this.params = this.params.set("startDate", this.stringToday).set("endDate", this.stringToday);
        this.getComponentsCount();
        break;
      case 'currentWeek':
        this.params = this.params.set("startDate", stringStartDateOfWeek).set("endDate", this.stringToday);
        this.getComponentsCount();
        break;
      case 'currentMonth':
        this.params = this.params.set("startDate", stringStartDateOfMonth).set("endDate", this.stringToday);
        this.getComponentsCount();
        break;
      case 'pastMonth':
        this.params = this.params.set("startDate", stringStartDateOfPastMonth).set("endDate", stringLastDateOfPastMonth);
        this.getComponentsCount();
        break;
    }
  }

  getComponentsCount(){
    this.reportsService.getComponentsAdded(this.params).subscribe((data: any) => {
      this.componentsAdded = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });
  }

  getNumberOfUsersOnline(){
    this.reportsService.getNumberOfUsersOnline().subscribe((data: any) => {
      this.numberOfActiveUsers = data;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    })
  }

  unreceivedList(): number{
    this.nirService.getAllUnreceived().subscribe((data: any) => {
      this.numberOfUnreceived = data.length;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.message;
    });

    return this.numberOfUnreceived;
  }
}
