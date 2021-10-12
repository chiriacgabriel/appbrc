import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {httpOptions} from '../../../environments/variables';
import {catchError} from 'rxjs/operators';
import {TokenStorageService} from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient,
              private token: TokenStorageService) { }

  getComponentsAdded(params): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/api/reports/componentsAdded`, {params});
  }

  getNumberOfUsersOnline(): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/api/reports/numberOfUsersLoggedIn`);
  }
}
