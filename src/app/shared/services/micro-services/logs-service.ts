import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IMovie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private httpClient: HttpClient) {}

  getLogs() {
    const url = `${environment.urlLogsManagement}`;
    const reqHeader = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<IMovie>(url, { headers: reqHeader, observe: 'response' });
  }
}
