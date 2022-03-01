import { enumMediaType } from './../enums/enumMediaType';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Movies Recomendations';

  movies: Array<Movie> = new Array<Movie>();

  movieSelected = '';

  ngOnInit(): void {
    this.movies = [
      {
        id: '1',
        title: `The Lord of The Rings: The fellowship of the rings`,
        sinopse: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
        img: `assets/img/fellowship.PNG`,
        rating: 9.9,
        type: 'movie',
      },
      new Movie(
        '2',
        `The Lord of the Rings: The Two Towers`,
        `While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.`,
        `assets/img/2_towers.PNG`,
        enumMediaType.movie,
        10
      ),
      new Movie(
        '3',
        `The Lord of the Rings: The Return of the King`,
        `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
        `assets/img/return_king.PNG`,
        enumMediaType.movie,
        10,
        {
          oscars: 11,
        }
      ),
    ];
  }

  deleteMovie(id: string): void {
    const index = this.movies.findIndex((movie) => movie.id === id);
    this.movies.splice(index, 1);
  }

  displayMovieSelected(title: string) {
    this.movieSelected = title;
  }
}
