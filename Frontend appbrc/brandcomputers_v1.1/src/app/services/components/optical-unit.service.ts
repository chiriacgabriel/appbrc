import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {OpticalUnit} from '../../model/components/OpticalUnit';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OpticalUnitService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getSearchResult(search: string, params): Observable<OpticalUnit[]> {
    return this.http.get<OpticalUnit[]>(`${this.apiServerUrl}/api/optical-unit/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<OpticalUnit[]> {
    return this.http.get<OpticalUnit[]>(`${this.apiServerUrl}/api/optical-unit/opticalUnitByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<OpticalUnit[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<OpticalUnit[]>(`${this.apiServerUrl}/api/optical-unit/filter`, {params});
  }

  getTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/optical-unit/types`);
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/optical-unit/manufacturers`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/optical-unit/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/optical-unit/stockByProductCode/search`, {params});
  }

  add(opticalUnit: OpticalUnit): Observable<OpticalUnit> {
    return this.http.post<OpticalUnit>(`${this.apiServerUrl}/api/optical-unit`, opticalUnit, httpOptions);
  }

  editById(id: number, opticalUnit: OpticalUnit): Observable<OpticalUnit> {
    return this.http.put<OpticalUnit>(`${this.apiServerUrl}/api/optical-unit/` + id, opticalUnit, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/optical-unit/` + id);
  }
}
