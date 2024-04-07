import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost'; // Rimuovi la specifica della porta

  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    // Inizializza il BehaviorSubject con il token salvato nel localStorage
    this.tokenSubject = new BehaviorSubject<string | null>(
      localStorage.getItem('token')
    );
  }

  // Ottieni il token attualmente salvato
  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  // Effettua il login
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          // Salva il token di accesso nel localStorage
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
        })
      );
  }

  // Effettua il logout
  logout(): void {
    // Rimuovi il token di accesso dal localStorage
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }
}
