import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getComponentsAdded(params): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/api/reports/componentsAdded`, {params})
  }
}
