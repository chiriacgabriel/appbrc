import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FanCase} from '../../model/FanCase';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FanCaseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  getSearchResults(search: string, params): Observable<FanCase[]> {
    return this.http.get<FanCase[]>(`${this.apiServerUrl}/api/fan-case/search/` + search, {params});
  }
  getByProductCode(productCode: string, params): Observable<FanCase[]> {
    return this.http.get<FanCase[]>(`${this.apiServerUrl}/api/fan-case/fanCaseByProductCode/` + productCode, {params});
  }
  getFilter(params, pageParams): Observable<FanCase[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<FanCase[]>(`${this.apiServerUrl}/api/fan-case/filter`, {params});
  }
  getDimensions(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/fan-case/allDimensions`);
  }
  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/fan-case/stockByProductCode/`, {params});
  }
  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/fan-case/stockByProductCode/search`, {params});
  }
  add(fanCase: FanCase): Observable<FanCase> {
    return this.http.post<FanCase>(`${this.apiServerUrl}/api/fan-case`, fanCase, httpOptions);
  }
  editById(id: number, fanCase: FanCase): Observable<FanCase> {
    return this.http.put<FanCase>(`${this.apiServerUrl}/api/fan-case/` + id, fanCase, httpOptions);
  }
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/fan-case/` + id);
  }

}
