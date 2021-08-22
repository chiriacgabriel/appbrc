import { Injectable } from '@angular/core';
import {CompanyData} from '../../model/accounting/CompanyData';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {httpOptions} from '../../../environments/variables';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CompanyData[]> {
    return this.http.get<CompanyData[]>(`${this.apiServerUrl}/api/company-data/profile`);
  }

  add(companyData: CompanyData): Observable<CompanyData> {
    return this.http.post<CompanyData>(`${this.apiServerUrl}/api/company-data`, companyData, httpOptions);
  }

  editById(id: number, companyData: CompanyData): Observable<CompanyData> {
    return this.http.put<CompanyData>(`${this.apiServerUrl}/api/company-data/` + id, companyData, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/company-data/` + id);
  }
}
