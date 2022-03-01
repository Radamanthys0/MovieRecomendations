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

  ngOnInit(): void {
    console.log(this.movies);

    // descomentar da lina 21 a 35 e responda as perguntas:
    // 1 - pq o primeiro nao da erro e o segundo tem erro?
    // 2 -  Como podemos resolver o erro do 2 ?

    // 1 - Analise

    // const movie = {
    //   title: `The Lord of The Rings: The fellowship of the rings`,
    //   sinopse: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
    //   img: `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    // };

    // const movie1: Movie = {
    //   title: `The Lord of The Rings: The fellowship of the rings`,
    //   sinopse: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
    //   img: `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    // };

    // console.log(movie1, movie);

    // descomentar da lina 41 a 46 e responda as perguntas:
    // 3 - Qual o problema nesse caso?

    // const movie = new Movie(
    //   `The Lord of the Rings: The Two Towers`,
    //   `While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard..`,
    //   `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
    //   `song`,
    //   10
    // );
    // console.log(movie);

    this.movies = [
      {
        id: '1',
        title: `The Lord of The Rings: The fellowship of the rings`,
        sinopse: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
        img: `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
        rating: 9.9,
        type: 'movie',
      },

      new Movie(
        '2',
        `The Lord of the Rings: The Two Towers`,
        `While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.`,
        `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
        enumMediaType.movie,
        10
      ),
      new Movie(
        '3',
        `The Lord of the Rings: The Return of the King`,
        `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
        `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
        enumMediaType.movie,
        10,
        {
          oscars: 11,
        }
      ),
    ];
  }
}
