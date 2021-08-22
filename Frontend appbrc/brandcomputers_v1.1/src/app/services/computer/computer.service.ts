import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Computer} from '../../model/computer/Computer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSearchResult(search: string, params): Observable<Computer[]> {
    return this.http.get<Computer[]>(`${this.apiServerUrl}/api/computer/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<Computer[]> {
    return this.http.get<Computer[]>(`${this.apiServerUrl}/api/computer/computersByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<Computer[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<Computer[]>(`${this.apiServerUrl}/api/computer/filter`, {params});
  }

  getDataForFilter(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/api/computer/allDataForFilter`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/computer/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/computer/stockByProductCode/search`, {params});
  }

  getDismantled(params): Observable<Computer[]> {
    return this.http.get<Computer[]>(`${this.apiServerUrl}/api/computer/computersDismantled`, {params})
  }

  add(computer: Computer): Observable<Computer> {
    return this.http.post<Computer>(`${this.apiServerUrl}/api/computer`, computer, httpOptions);
  }

  editById(id: number, computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(`${this.apiServerUrl}/api/computer/` + id, computer, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/computer/` + id);
  }
}
