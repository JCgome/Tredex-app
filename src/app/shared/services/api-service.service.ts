import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = 'https://randomuser.me/api/?results=15';

  constructor(private http: HttpClient) {}

  getData(): Observable<Client> {
    return this.http.get<Client>(this.apiUrl);
  }
}
