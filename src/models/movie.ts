import { enumMediaType } from './../enums/enumMediaType';

// com typescript podemos definir nosso proprio tipo, deste caso estamos defininco o novo tipo MediaType a partir de literais.
export type MediaType = 'movie' | 'series';

export class Movie {
  /**
   * podemos associar um tipo primitivo para um atributo.
   * eles podem ser: boolean, string e number
   *
   * @type {string}
   * @memberof Movie
   */
  title: string;

  id: string;
  img: string;
  sinopse: string;

  /**
   * essa linha, tem dois pontos interessantes:
   *  - Ao nao declarar o tipo de um atributo, sera feita uma inferencia de tipos, portanto rating e um number.
   *  - Podemos atribuir valores iniciais a um atributo
   * @memberof Movie
   */
  rating = 10;

  /**
   * podemos utilizar tipos previamente criados
   *
   * @type {MediaType}
   * @memberof Movie
   */
  type: MediaType;

  /**
   * podemos associar a um atributo, tipos especiais, ex:
   *  any, undefined
   *
   * alem disso, quando utilizamos a "?" estamos dizendo que esse atributo e opcional
   *
   * @type {*}
   * @memberof Movie
   */
  info?: any;

  /**
   *
   * Creates an instance of Movie.
   * @param {string} [title]
   * @param {string} [sinopse]
   * @param {string} [img]
   * @param {MediaType} [type]
   * @param {number} [rating]
   * @param {number} [info]
   * @memberof Movie
   */
  constructor(
    id: string,
    title: string,
    sinopse: string,
    img: string,
    type: MediaType,
    rating: number,
    info?: any
  ) {
    // o operador "??" ou operador de coalescência nula retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined.
    // Caso contrário, ele retorna o seu operando do lado esquerdo.
    this.id = id;
    this.title = title ?? '';
    this.sinopse = sinopse ?? '';
    this.img = img ?? '';
    this.type = type ?? enumMediaType.movie;
    this.rating = rating ?? 10;
    this.info = info ?? null;
  }
}
