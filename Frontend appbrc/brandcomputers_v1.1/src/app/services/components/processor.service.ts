import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Processor} from '../../model/components/Processor';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getSearchResult(search: string, params): Observable<Processor> {
    return this.http.get<Processor>(`${this.apiServerUrl}/api/processor/search/` + search, {params});
  }

  getByProductCode(productCode: string, params: any): Observable<Processor[]> {
    return this.http.get<Processor[]>(`${this.apiServerUrl}/api/processor/processorByProductCode/` + productCode, {params});
  }

  getFilter(params, pageParams): Observable<Processor> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<Processor>(`${this.apiServerUrl}/api/processor/filter`, {params});
  }

  getManufacturers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/manufacturers`);
  }

  getSockets(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/sockets`);
  }

  getModels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/models`);
  }

  getNumberOfCpuCores(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/numberOfCpuCores`);
  }

  getNumberOfThreads(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/numberOfThreads`);
  }

  getBaseClocks(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/base-clocks`);
  }

  getMaxBoostClocks(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/max-boost-clocks`);
  }

  getMaxMemoryFrequencies(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/max-memory-frequencies`);
  }

  getLithography(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiServerUrl}/api/processor/lithography`);
  }

  getTypeOfMemoryRam(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/typeOfMemoryRam`);
  }

  getAllProductCodesWithStock(params: any): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/stockByProductCode`, {params});
  }

  getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
    params = params.set('page', pageParams.page).set('size', pageParams.size);
    return this.http.get<string[]>(`${this.apiServerUrl}/api/processor/stockByProductCode/search`, {params});
  }

  add(processor: Processor): Observable<Processor> {
    return this.http.post<Processor>(`${this.apiServerUrl}/api/processor`, processor, httpOptions);
  }

  editById(id: number, processor: Processor): Observable<Processor> {
    return this.http.put<Processor>(`${this.apiServerUrl}/api/processor/` + id, processor, httpOptions);
  }

  deleteById(id: number): Observable<Processor> {
    return this.http.delete<Processor>(`${this.apiServerUrl}/api/processor/` + id);
  }

}
