import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Movie } from './../../models/movie';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  /**
   * para testar requisições, vamos utilizar o HttpTestingController
   * @type {*} */
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // como, vamos utilizar o HttpClient para fazer a requisicao, precisamos dos dois, o proprio HttpClient e o HttpClientTesting q vai nos ajudar nos testes
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(MovieService);
    httpController = TestBed.inject(HttpTestingController);
  });

  /** Testa se o service existe */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * testa se o getMovies está retornando um array de Movie
   */
  it('should call getMovies and return an array of Movie', () => {
    /**
     * definimos um array mock
     * */
    const mockMovies: Movie[] = [
      {
        id: '1',
        title: 'The Lord of The Rings: The fellowship of the rings',
        sinopse:
          'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        img: 'assets/img/fellowship.PNG',
        rating: 9.9,
        type: 'movie',
      },
      {
        id: '2',
        title: 'The Lord of the Rings: The Two Towers',
        sinopse:
          "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        img: 'assets/img/2_towers.PNG',
        rating: 10,
        type: 'movie',
      },
    ];

    // chamamos a nossa funcao getMovies
    service.getMovies().subscribe((res) => {
      //esperamos que a resposta possua um valor igual ao mock que criamos
      expect(res).toEqual(mockMovies);
    });

    // especificamos a url e o tipo de requisicao q estamos fazendo
    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.apiUrl}movies`,
    });

    // enviamos o mock como resultado da requisicao
    req.flush(mockMovies);
  });
});
