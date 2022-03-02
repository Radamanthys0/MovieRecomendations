import { MovieService } from './../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res) => {
      console.log(res);
      console.log(res.get('id'));

      this._movieService.getMovie(res.get('id') ?? '').subscribe((movies) => {
        this.movie = movies[0];
        console.table(this.movie);
      });
    });
  }
}
