import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getStatus(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getUf(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/SP');
  }
}
