import { Movie } from './../../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  /**
   * Creates an instance of MovieService.
   * @param {HttpClient} _http sempre que precisamos fazer uma requisição rest, podemos utiliza o service HttpClient. Para isso e preciso importar o HttpClientModule no module respectivo
   * @memberof MovieService
   */
  constructor(protected _http: HttpClient) {}

  /**
   * Abordagem com observables do getMovie
   *
   * note que aqui utilizamos o padrao do httpClient q e o observable
   * alem disso utilizamos da lib rxjs para tratamento de erros e retry caso a requisição apresenta algum erro
   *
   * @return {*}  {Observable<Array<Movie>>}
   * @memberof MovieService
   */
  getMovies(): Observable<Array<Movie>> {
    return this._http.get<Array<Movie>>(`${environment.apiUrl}movies`).pipe(
      retry(3),
      catchError((error) => {
        console.log(error);
        return throwError(error.message);
      })
    );
  }

  /**
   * Abordagem com promise do getMovie
   * a diferenca aqui e que em nossa chamada adicionamos o ".toPromise()", e como nos interessa é a resposta, adicionamos tbm um "await", isso significa
   * que o codigo ira ficar "parado" nessa parte ate que tenhamos um resultado da requisicao.
   *
   * sempre q temos uma funcao que tenha um "await", entao a funcao tem que ser declarada assincrona, por isso utilizamos o "async"
   *
   * @return {*}  {Promise<Array<Movie>>}
   * @memberof MovieService
   */
  async getMoviesAsync(): Promise<Array<Movie>> {
    return await this._http
      .get<Array<Movie>>(`${environment.apiUrl}movies`)
      .toPromise();
  }
}
