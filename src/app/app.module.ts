import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccediComponent } from './components/accedi/accedi.component';
import { RegistratiComponent } from './components/registrati/registrati.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarFilmComponent } from './components/navbar-film/navbar-film.component';

import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    AccediComponent,
    RegistratiComponent,
    HomeComponent,
    NavbarComponent,
    NavbarFilmComponent,
    FilmComponent, // Aggiungi il FilmComponent ai dichiarazioni
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'accedi', component: AccediComponent },
      { path: 'registrati', component: RegistratiComponent },
      { path: 'home', component: HomeComponent },
      { path: 'film', component: FilmComponent }, // Aggiungi una rotta per visualizzare i film
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
