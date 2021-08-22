import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {SoundCard} from '../../model/components/SoundCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SoundCardService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getSearchResult(search: string, params): Observable<SoundCard[]> {
    return this.http.get<SoundCard[]>(`${this.apiServerUrl}/api/sound-card/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<SoundCard[]> {
    return this.http.get<SoundCard[]>(`${this.apiServerUrl}/api/sound-card/soundCardByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<SoundCard[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<SoundCard[]>(`${this.apiServerUrl}/api/sound-card/filter`, {params});
  }

  getModels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/sound-card/models`);
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/sound-card/manufacturers`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/sound-card/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/sound-card/stockByProductCode/search`, {params});
  }

  add(soundCard: SoundCard): Observable<SoundCard> {
    return this.http.post<SoundCard>(`${this.apiServerUrl}/api/sound-card`, soundCard, httpOptions);
  }

  editById(id: number, soundCard: SoundCard): Observable<SoundCard> {
    return this.http.put<SoundCard>(`${this.apiServerUrl}/api/sound-card/` + id, soundCard, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/sound-card/` + id);
  }
}
