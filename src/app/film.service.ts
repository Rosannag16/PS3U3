import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = 'http://localhost:3000'; // Imposta il base URL del backend

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/movies-popular`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movies-popular/${movieId}`);
  }
}
