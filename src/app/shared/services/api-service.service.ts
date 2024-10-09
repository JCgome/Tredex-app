import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/interfaces/client.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { Tracked } from 'src/app/core/interfaces/tracked.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiClient = environment.apiClient;
  private apiProducts = environment.apiProducts;
  private apiTracked = environment.apiTracked;

  constructor(private http: HttpClient) {}

  getDataClient(): Observable<Client> {
    return this.http.get<Client>(this.apiClient);
  }

  getDataProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiProducts);
  }

  getDataTracked(): Observable<Tracked[]> {
    return this.http.get<Tracked[]>(this.apiTracked);
  }
}
