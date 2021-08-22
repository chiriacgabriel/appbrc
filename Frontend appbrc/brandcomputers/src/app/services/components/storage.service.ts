import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Storage} from '../../model/Storage';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSearchResult(search: string, params): Observable<Storage[]> {
    return this.http.get<Storage[]>(`${this.apiServerUrl}/api/storage/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<Storage[]> {
    return this.http.get<Storage[]>(`${this.apiServerUrl}/api/storage/storageByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<Storage[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<Storage[]>(`${this.apiServerUrl}/api/storage/filter`, {params});
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/storage/manufacturers`);
  }

  getTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/storage/types`);
  }

  getForms(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/storage/forms`);
  }

  getCapacities(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/storage/capacities`);
  }

  getRpm(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/storage/rpm`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/storage/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/storage/stockByProductCode/search`, {params});
  }

  add(storage: Storage): Observable<Storage> {
    return this.http.post<Storage>(`${this.apiServerUrl}/api/storage`, storage, httpOptions);
  }

  editById(id: number, storage: Storage): Observable<Storage> {
    return this.http.put<Storage>(`${this.apiServerUrl}/api/storage/` + id, storage, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/storage/` + id);
  }

}
