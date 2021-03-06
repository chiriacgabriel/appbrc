import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/components/User';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/register`, user, httpOptions);
  }
}
