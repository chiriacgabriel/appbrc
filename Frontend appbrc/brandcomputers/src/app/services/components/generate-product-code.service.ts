import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {GenerateProductCode} from '../../model/GenerateProductCode';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GenerateProductCodeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<GenerateProductCode[]> {
    return this.http.get<GenerateProductCode[]>(`${this.apiServerUrl}/api/` + url);
  }

  search(searchUrl: string, params): Observable<GenerateProductCode> {
    return this.http.get<GenerateProductCode>(`${this.apiServerUrl}/api/` + searchUrl, {params});
  }

  add(url: string, generateProductCode: GenerateProductCode): Observable<GenerateProductCode> {
    return this.http.post<GenerateProductCode>(`${this.apiServerUrl}/api/` + url,
      generateProductCode, httpOptions);
  }

  update(url: string, id: number, generatedProductCodeCase: GenerateProductCode): Observable<GenerateProductCode> {
    return this.http.put<GenerateProductCode>(`${this.apiServerUrl}/api/` + url  + `/` + id,
      generatedProductCodeCase, httpOptions);
  }

  delete(url: string, id: number): Observable<GenerateProductCode> {
    return this.http.delete<GenerateProductCode>(`${this.apiServerUrl}/api/` + url + `/` + id);
  }
}
