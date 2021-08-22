import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nir} from '../../model/accounting/Nir';
import {httpOptions} from '../../../environments/variables';

@Injectable({
    providedIn: 'root'
})
export class NirService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Nir[]> {
        return this.http.get<Nir[]>(`${this.apiServerUrl}/api/nir`);
    }

    getAllUnreceived(): Observable<any> {
        return this.http.get(`${this.apiServerUrl}/api/nir/unreceived`);
    }

    add(nir: Nir): Observable<Nir> {
        return this.http.post<Nir>(`${this.apiServerUrl}/api/nir`, nir, httpOptions);
    }

}
