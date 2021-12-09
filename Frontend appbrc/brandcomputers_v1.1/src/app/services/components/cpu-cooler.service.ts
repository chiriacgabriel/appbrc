import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CpuCooler} from '../../model/components/CpuCooler';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CpuCoolerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getSearchResult(search: string, params): Observable<CpuCooler> {
    return this.http.get<CpuCooler>(`${this.apiServerUrl}/api/cpu-cooler/search/` + search, {params});
  }

  getByProductCode(productCode: string, params: any): Observable<CpuCooler[]>{
    return this.http.get<CpuCooler[]>(`${this.apiServerUrl}/api/cpu-cooler/cpuCoolerByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<CpuCooler>{
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<CpuCooler>(`${this.apiServerUrl}/api/cpu-cooler/filter`, {params});
  }

  getSockets(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/cpu-cooler/socket/`);
  }

  getManufacturers(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/cpu-cooler/manufacturers/`);
}

  getAllProductCodesWithStock(params: any): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/cpu-cooler/stockByProductCode`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]>{
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/cpu-cooler/stockByProductCode/search`, {params});
  }

  add(cpuCooler: CpuCooler): Observable<CpuCooler>{
    return this.http.post<CpuCooler>(`${this.apiServerUrl}/api/cpu-cooler`, cpuCooler, httpOptions);
  }

  editById(id: number, cpuCooler: CpuCooler): Observable<CpuCooler>{
    return this.http.put<CpuCooler>(`${this.apiServerUrl}/api/cpu-cooler/` + id, cpuCooler, httpOptions);
  }

  deleteById(id: number): Observable<CpuCooler>{
    return this.http.delete<CpuCooler>(`${this.apiServerUrl}/api/cpu-cooler/` + id);
  }

}
