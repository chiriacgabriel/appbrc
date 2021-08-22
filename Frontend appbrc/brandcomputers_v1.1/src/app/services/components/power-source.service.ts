import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PowerSource} from '../../model/components/PowerSource';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PowerSourceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getSearchResults(search: string, params): Observable<PowerSource> {
    return this.http.get<PowerSource>(`${this.apiServerUrl}/api/powerSource/search/` + search, {params});
  }

  getByProductCode(productCode: string, params: any): Observable<PowerSource>{
    return this.http.get<PowerSource>(`${this.apiServerUrl}/api/powerSource/powerSourcesByProductCode/` + productCode, {params});
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/powerSource/allManufacturers/`);
  }

  getSourceTypes(): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/powerSource/sourceTypes/`);
  }

  getFilter(params, pageParams): Observable<PowerSource> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<PowerSource>(`${this.apiServerUrl}/api/powerSource/filter`, {params});
  }

  getAllProductCodesWithStock(params: any): Observable<string[]>{
    return this.http.get<string[]>(`${this.apiServerUrl}/api/powerSource/stockByProductCode`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]>{
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/powerSource/stockByProductCode/search`, {params});
  }

  add(powerSource: PowerSource): Observable<PowerSource> {
    return this.http.post<PowerSource>(`${this.apiServerUrl}/api/powerSource/`, powerSource, httpOptions);
  }

  editById(id: number, powerSource: PowerSource): Observable<PowerSource> {
    return this.http.put<PowerSource>(`${this.apiServerUrl}/api/powerSource/` + id, powerSource, httpOptions);
  }

  deleteById(id: number): Observable<PowerSource> {
    return this.http.delete<PowerSource>(`${this.apiServerUrl}/api/powerSource/` + id);
  }

}
