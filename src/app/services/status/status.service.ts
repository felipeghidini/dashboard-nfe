import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCurrentStatus } from 'src/app/models/interfaces/status/response/GetCurrentStatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<Array<GetCurrentStatus>> {
    return this.http.get<Array<GetCurrentStatus>>(
      `${this.API_URL}`
    )
  }

  getStatusByUf(uf: string): Observable<Array<GetCurrentStatus>> {
    return this.http.get<Array<GetCurrentStatus>>(
      `${this.API_URL}/${uf}`);
  }
}
