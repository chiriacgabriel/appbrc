import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Motherboard} from '../../model/Motherboard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSearchResult(search: string, params): Observable<Motherboard>{
    return this.http.get<Motherboard>(`${this.apiServerUrl}/api/motherboard/search/` + search, {params});
  }

  getByProductCode(productCode: string, params: any): Observable<Motherboard[]>{
    return this.http.get<Motherboard[]>(`${this.apiServerUrl}/api/motherboard/motherboardByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<Motherboard>{
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<Motherboard>(`${this.apiServerUrl}/api/motherboard/filter`, {params});
  }

  getManufacturers(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/motherboard/allManufacturers/`);
  }

  getCpuSockets(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/motherboard/allCpuSockets/`);
  }

  getAllProductCodesWithStock(params: any): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/motherboard/stockByProductCode`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]>{
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/motherboard/stockByProductCode/search`, {params});
  }

  add(motherboard: Motherboard): Observable<Motherboard>{
    return this.http.post<Motherboard>(`${this.apiServerUrl}/api/motherboard`, motherboard, httpOptions);
  }

  editById(id: number, motherboard: Motherboard): Observable<Motherboard>{
    return this.http.put<Motherboard>(`${this.apiServerUrl}/api/motherboard/` + id, motherboard, httpOptions);
  }

  deleteById(id: number): Observable<Motherboard>{
    return this.http.delete<Motherboard>(`${this.apiServerUrl}/api/motherboard/` + id);
  }
}
