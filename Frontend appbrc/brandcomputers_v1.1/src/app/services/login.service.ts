import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    login(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/api/login`, {
            email: user.email,
            password: user.password
        }, httpOptions);
    }
}
