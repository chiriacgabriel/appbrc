import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {VideoCard} from '../../model/VideoCard';
import {Storage} from '../../model/Storage';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VideoCardService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSearchResult(search: string, params): Observable<VideoCard[]> {
    return this.http.get<VideoCard[]>(`${this.apiServerUrl}/api/video-card/search/` + search, {params});
  }

  getByProductCode(productCode: string, params): Observable<VideoCard[]> {
    return this.http.get<VideoCard[]>(`${this.apiServerUrl}/api/video-card/videoCardByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<VideoCard[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<VideoCard[]>(`${this.apiServerUrl}/api/video-card/filter`, {params});
  }

  getDataForFilter(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/video-card/allDataForFilter/`);
  }

  getAllProductCodesWithStock(params): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/video-card/stockByProductCode/`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/video-card/stockByProductCode/search`, {params});
  }

  add(videoCard: VideoCard): Observable<VideoCard> {
    return this.http.post<VideoCard>(`${this.apiServerUrl}/api/video-card`, videoCard, httpOptions);
  }

  editById(id: number, videoCard: VideoCard): Observable<VideoCard> {
    return this.http.put<VideoCard>(`${this.apiServerUrl}/api/video-card/` + id, videoCard, httpOptions);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/video-card/` + id);
  }

}
