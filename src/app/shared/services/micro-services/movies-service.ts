import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IMovie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    const url = `${environment.urlMoviesManagement}`;
    const reqHeader = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<IMovie>(url, { headers: reqHeader, observe: 'response' });
  }

  addMovie() {}

  getMovieById(movieId: string) {}

  updateMovieById(movieId: string) {}

  deleteMovieById(movieId: string){}
}
