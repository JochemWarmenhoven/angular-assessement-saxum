import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${environment.apiUrl}/users`);
  }

  register(user) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }
}
