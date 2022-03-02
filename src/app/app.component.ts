import { Component, OnInit } from '@angular/core';
import { Movie } from './../models/movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Movies Recomendations';

  movies: Array<Movie> = new Array<Movie>();

  /**
   * Creates an instance of AppComponent.
   * @param {MovieService} _movieService para utilizar um service criado, basta adicionar no construtor
   * @memberof AppComponent
   */
  constructor(protected _movieService: MovieService) {}

  ngOnInit(): void {
    this.getMoviesObservable();

    // this.getMoviesAsync();
  }

  getMoviesObservable() {
    this._movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getMoviesAsync() {
    this.movies = await this._movieService.getMoviesAsync();
  }

  deleteMovie(id: string): void {
    const index = this.movies.findIndex((movie) => movie.id === id);
    this.movies.splice(index, 1);
  }
}
