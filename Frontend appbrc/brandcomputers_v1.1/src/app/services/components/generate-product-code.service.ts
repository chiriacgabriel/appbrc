import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {GenerateProductCode} from '../../model/components/GenerateProductCode';
import {NotificationService} from '../../helper/notification.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class GenerateProductCodeService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient,
                private notificationService: NotificationService) {
    }

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

    update(url: string, id: number, generatedProductCode: GenerateProductCode): Observable<GenerateProductCode> {
        return this.http.put<GenerateProductCode>(`${this.apiServerUrl}/api/` + url + '/' + id,
            generatedProductCode, httpOptions);
    }

    delete(url: string, id: number): Observable<GenerateProductCode> {
        return this.http.delete<GenerateProductCode>(`${this.apiServerUrl}/api/` + url + '/' + id);
    }

    inactiveProductCode(param: any, productCodeInactive: any) {
        const buttonID = document.getElementById(param);

        if (param instanceof MouseEvent) {

            param.stopPropagation();

        } else {

            buttonID.removeAttribute('data-toggle');
            buttonID.removeAttribute('data-target');

        }

        // tslint:disable-next-line:max-line-length
        const errorMessage = 'Codul de produs este inactiv, contacteaza un administrator pentru activarea acestui cod: ' + productCodeInactive.productCode;
        this.notificationService.showNotification('top', 'center', errorMessage, 'danger');
    }
}
