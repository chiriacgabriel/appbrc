import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {Case} from '../../model/components/Case';
import {catchError} from 'rxjs/operators';
import {TokenStorageService} from '../token-storage.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CaseService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient,
                private token: TokenStorageService) {
    }

    getSearchResult(search: string, params): Observable<Case> {
        return this.http.get<Case>(`${this.apiServerUrl}/api/case/search/` + search, {params})
            .pipe(catchError(error => {
                if (error.status === 401) {
                    this.token.signOut();
                }
            return throwError(error);
        }));
    }

    getByProductCode(productCode: string, params: any): Observable<Case[]> {
        return this.http.get<Case[]>(`${this.apiServerUrl}/api/case/caseByProductCode/` + productCode, {params});
    }

    getFilter(params, pageParams): Observable<Case> {
        params = params.set('page', pageParams.page).set('size', pageParams.size);
        return this.http.get<Case>(`${this.apiServerUrl}/api/case/filter`, {params});
    }

    getCompatibleMotherboards(): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiServerUrl}/api/case/compatibleMotherboard/`);
    }

    getAllProductCodesWithStock(params: any): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiServerUrl}/api/case/stockByProductCode`, {params});
    }

    getAllSearchProductCodesWithStock(params, pageParams): Observable<string[]> {
        params = params.set('page', pageParams.page).set('size', pageParams.size);
        return this.http.get<string[]>(`${this.apiServerUrl}/api/case/stockByProductCode/search`, {params});
    }

    add(aCase: Case): Observable<Case> {
        return this.http.post<Case>(`${this.apiServerUrl}/api/case`, aCase, httpOptions);
    }

    editById(id: number, aCase: Case): Observable<Case> {
        return this.http.put<Case>(`${this.apiServerUrl}/api/case/` + id, aCase, httpOptions);
    }

    deleteById(id: number): Observable<Case> {
        return this.http.delete<Case>(`${this.apiServerUrl}/api/case/` + id);
    }

}
