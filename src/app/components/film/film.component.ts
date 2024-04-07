import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  popularMovies: any[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.filmService.getPopularMovies().subscribe(
      (movies: any[]) => {
        this.popularMovies = movies;
      },
      (error) => {
        console.error('Errore nel recupero dei film popolari:', error);
      }
    );
  }
}
