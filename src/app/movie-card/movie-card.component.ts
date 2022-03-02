import { Movie } from './../../models/movie';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**+
 * o Decorator Component irá definir algumas propriedades basicas do nosso componente, como por exemplo o html.
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  // para passar um dado de um componente pai, para um componente filho, utilizamos o @Input. veja mais no readme:
  @Input() movie: Movie | null = null;

  // para passar um dado de um componente filho, para um componente pai, utilizamos o @Output. veja mais no readme:
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  /**
   * cada componente no Angular segue um ciclo de vida, que acontece desde o momento em que o componente é renderizado na tela até o momento que ele seja destruido.
   * para cada momento desse ciclo de vida, temos uma fucao correspondente. Aqui, vamos utilizar apenas duas. ngOnInit (acontece na renderizacao do componente) e
   * ngOnDestroy (acontece quando o componente for destruido). no readMe existe uma sessao falando mais sobre
   *
   */
  ngOnInit(): void {}

  ngOnDestroy(): void {}

  deleteMovie(id: string): void {
    this.delete.emit(id);
  }
  seeMore(id: string): void {
    this._route.navigate([`movie/${id}`]);
  }
}
