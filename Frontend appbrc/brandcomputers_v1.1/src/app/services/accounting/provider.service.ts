import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptions} from '../../../environments/variables';
import {Provider} from '../../model/accounting/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.apiServerUrl}/api/providers`);
  }

  add(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(`${this.apiServerUrl}/api/providers`, provider, httpOptions);
  }

  editById(id: number, provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${this.apiServerUrl}/api/providers/` + id, provider, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/providers/` + id);
  }
}
