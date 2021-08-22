import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {MemoryRam} from '../../model/components/MemoryRam';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MemoryRamService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  getSearchResult(search: string, params): Observable<MemoryRam[]> {
    return this.http.get<MemoryRam[]>(`${this.apiServerUrl}/api/memory-ram/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<MemoryRam[]> {
    return this.http.get<MemoryRam[]>(`${this.apiServerUrl}/api/memory-ram/memoryRamByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<MemoryRam[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<MemoryRam[]>(`${this.apiServerUrl}/api/memory-ram/filter`, {params});
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/manufacturers`);
  }

  getModules(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/modules`);
  }

  getRamTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/ramTypes`);
  }

  getFrequencies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/frequencies`);
  }

  getCapacities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/capacities`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/memory-ram/stockByProductCode/search`, {params});
  }

  add(memoryRam: MemoryRam): Observable<MemoryRam> {
    return this.http.post<MemoryRam>(`${this.apiServerUrl}/api/memory-ram`, memoryRam, httpOptions);
  }

  editById(id: number, memoryRam: MemoryRam): Observable<MemoryRam> {
    return this.http.put<MemoryRam>(`${this.apiServerUrl}/api/memory-ram/` + id, memoryRam, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/memory-ram/` + id);
  }

}
