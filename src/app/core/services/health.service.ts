import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  getHealthStatus() {
    return this.http.get(this.apiUrl + "/health", {
      responseType: 'text'
    })
  }
}
