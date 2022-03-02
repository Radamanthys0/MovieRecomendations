# MovieRecomendations

Este projeto tem como função mostrar alguns conceitos relacionados ao desenvolvimento com Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

# Dependências:

Para iniciar um projeto angular, vamos precisar basicamente de duas ferramentas respectivamente: o node (https://nodejs.org/en/) e o Angular Cli (https://www.npmjs.com/package/@angular/cli).

# Criação de um novo projeto Angular:

Para iniciar um novo projeto Angular, basta executar o seguinte comando no terminal:

```
ng new NovoProjeto
```

ver mais: https://angular.io/cli/new

# Um pouco sobre typescript:

Typescript nada mais é do que um SuperSet javascript, e o que isso significa? Isso significa que o typescript foi uma iniciativa da Microsoft de deixar o
JS mais orientado a objetos, e sem perder a essência do js. Pensa assim js é o Charmander, o typescript é o Charizard!

Apesar das vantagens, é bom lembrar que os navegadores atualmente não entendem o TS e, portanto, todo código q é escrito em TS é transpilado para um JS correspondente.

# Anatomia de um projeto Angular

A seguir um pouco sobre as unidade que compõe o Angular. Estas unidades, vão comunicar entre si e o principal aqui é lembrar de duas palavrinhas mágicas:
`coesão` e `Acoplamento`. isso pq nos vamos tentar estruturar nossa aplicação de tal forma que aumente a coesão e diminua o acoplamento. Mas primeiro
vamos entender cada coisa.

## componente:

Para criar um novo componente, é simples como o dia, basta no terminal, executar o seguinte comando:

```
ng g c NovoComponente
```

`Note que ele já adiciona dentro do "declaration" do módulo o componente criado`

Cada componente é composto por algumas partes:

### Component

O component ou o arquivo que possui final `.component.ts` é a nossa controller. É no component que definimos algumas propriedades básicas e descrevemos a logica que aquele componente terá que desempenhar.

Ao entrar no arquivo, vc se depara com o que chamamos de `decorator` Component. Um `decorator` nada mais é que um recurso utilizado para `vincular a uma classe ou método um metadata`. No caso do decorator Component, estamos vinculando aquela classe, as propriedades selector (a forma q vamos chamar aquele component no html), templateUrl: (arquivo ou string q irá ser interpretada como html) e styleUrls (arquivo ou string q irá ser interpretada como nossa folha de estilo). É bom lembrar que essas não são as únicas opções de metadados q temos, para saber mais acesse: https://angular.io/api/core/Component

```ts
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
```

#### Ciclo de vida de um componente

Do momento em que o componente é renderizado na tela, até o momento em que o componente é destruído, o Angular nos fornce diversas interfaces que vão nos ajudar a controlar qualquer logica que esteja vinculada a vida do componente.

para utilizar, basta implementar a interface desejada na classe do componente:

```ts
export class MovieCardComponent implements OnInit { ...
```

e escrever a função :

```ts
 ngOnInit(): void { ... }
```

Veja mais em : https://angular.io/guide/lifecycle-hooks

#### Comunicação entre componentes

Não é incomum que um componente precise de comunicar com o outro. Para isso, o Angular nos da algumas ferramentas.

##### @Input

Para a comunicação entre um componente pai, e um componente filho, podemos utilizar o `@Input`. Ele funciona de maneira bem prática. No componente filho, basta adicionar um atributo da seguinte maneira:

```ts
@Input() movie: Movie | null = null;
```

e já no componente passar via binding o que for necessário:

```html
<app-movie-card [movie]="movie"></app-movie-card>
```

##### @Output

Para a comunicação entre um componente filho, e um componente pai, podemos utilizar o `@Output`. É preciso lembrar que, essa comunicação acontece via evento e, portanto precisamos no component do pai uma função para resolver este evento. então vamos lá, no componente filho, iremos adicionar primeiramente:

```ts
@Output() delete: EventEmitter<string> = new EventEmitter<string>();

```

Esta primeira linha, serve para criar o evento que será disparado para o componente pai. Para isso, utilizamos o decorator @Output, juntamente com o EventEmitter, que vai resolver tudo para a gente. Note que podemos adicionar um tipo de dado q iremos trafegar, no exemplo é uma string.

Lembre-se de importar corretamente do pacote angula/core (`import {Output, EventEmitter} from '@angular/core'`). Em seguida, vamos disparar esse evento, da seguinte forma:

```ts
this.delete.emit(id);
```

O `.emit` fará a mágica de disparar um evento de dom, contendo o `id`.

Uma vez que o evento é disparado, vamos lembrar da forma em que o Angular captura eventos, isso mesmo, vamos utilizar novamente um binding.

```html
<app-movie-card (delete)="deleteMovie($event)"></app-movie-card>
```

Através do binding de evento do angular, vamos capturar o evento que foi emitido e vamos tratar dentro da função `deleteMovie()`. Por se tratar de um evento q contém um conteúdo interessante para a gente, vamos passar como parâmetro o $event. O `$event` serve para capturar as informações daquele evento de dom, no nosso caso é apenas o id. No final, a função ficará assim:

```ts
 deleteMovie(id: string):void { ... }
```

e já no componente passar via binding o que for necessário:

```html
<app-movie-card [movie]="movie"></app-movie-card>
```

veja mais em: https://maffonso.medium.com/angular-8-interação-entre-componentes-cf19b46e624e

### html/Estilo

Quando utilizamos templateUrl e styleUrls, precisamos de arquivos únicos para oq se tornará nosso HTML e, nossa folha de estilo. Aqui não tem segredo, toda a construção da página será feita nestes arquivos. No exemplo desta aplicação utilizamos SCSS, que definimos lá na criação da aplicação. Basicamente o SCSS é o css tradicional, com algumas funcionalidades a mais (css = evee, SCSS = flareon, Sass = Vaporeon), vc pode ver mais em https://sass-lang.com.

### teste

É comum ao criar um componente ou um service via cli, é também criado um arquivo `.spec.ts`. Este arquivo é utilizado pelo Angular para executar testes unitários referentes aquele componente ou service.

Ao abrir este arquivo, vc se depara com algumas coisas já prontas. vamos entender um pouco de cada:

Primeiramente temos o describe e é o primeiro bloco do teste a ser executado. é nele que vamos definir dependências e descrever nossos testes.

```ts
describe('MovieCardComponent', () => { ... }
```

logo em seguida temos o bloco beforeEach. Este bloco será executado antes de qualquer outra coisa e, já como padrão, ele simula a declaração do component e prepara o `testBed`
(que nada mais é que o pacote que resolve os testes do Angular), para executar os testes que iremos escrever

```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [MovieCardComponent],
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(MovieCardComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
```

Finalmente temos o bloco `it`. Este bloco é o teste propriamente dito. Como padrão, já existe um primeiro teste escrito que é, o `should create`. Este teste garante que, ao chamar este componente, ele será criado e renderizado.

```ts
it("should create", () => {
  expect(component).toBeTruthy();
});
```

A partir daí podemos criar nossos próprios testes, por exemplo:

```ts
it(`should render 'HELLO WORLD'`, () => {
  const fixture = TestBed.createComponent(MovieCardComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector("h1").textContent).toContain("HELLO WORLD");
});
```

Traduzindo:

- ` const fixture = TestBed.createComponent(MovieCardComponent); fixture.detectChanges();` : pegamos uma instância do componente
- `const compiled = fixture.nativeElement;` : pegamos o html
- ` expect(compiled.querySelector("h1").textContent).toContain("HELLO WORLD");`: criamos uma condição, esperamos (`expect`) que exista um `<h1>` que possua (`toContain`) o texto `HELLO WORLD`;

### padrão na criação do projeto Angular

## service:

Sempre que tivermos que tratar algo externo a um componente, vamos utlizar serviços. Desta forma, caso seja necessário consumir uma api, ou até mesmo tratar uma
comunicação entre mais de dois componentes, até mesmo algo relacionado a segurnaça, vamos utilizar um service.

Para criar um novo service, também é simples como o dia, basta no terminal, executar o seguinte comando:

```
ng g service NovoService
```

É bom lembrar que no Angular `todo service funciona como um singleton`, desta forma, independente de onde eu acesse uma instância de um service, ela sempre será igual.

Para utilizar um service em seu componente, basta adicionar ele no construtor. dessa forma:

```ts
export class AppComponent implements OnInit {

  constructor(protected _movieService: MovieService) {...}

  ...
}
```

Ao fazer isso, vc tem uma instância daquele service e, pode chamar seus atributos funções dessa forma:

```ts
this._movieService.getMovies();
```

### Consumindo dados do backend

Vamos entender um pouco sobre consumo de apis. A maioria das comunicaçõesfeitas entre o front e o back será feita através de requisições REST. O Angular já nos disponibiliza ferramentas para deixar nossa vida mais fácil. Para utilizá-las, basta importar no módulo de seu componente o `HttpClientModule`.

```ts
@NgModule({
  declarations: [  ... ],
  imports: [HttpClientModule, ...],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Uma vez que temos o HttpClientModule importado, podemos utilizar as suas ferramentas, para isso, basta chamar o `HttpClient` dentro de seu service (Veja mais em: https://angular.io/api/common/http/HttpClient#description).

```ts
export class MovieService {
  constructor(protected _http: HttpClient) { ... }
...
}
```

Com o Http Client, podemos fazer requisições rest de uma maneira bem simples, uma vez que ele já nos disponibiliza funções específicas para cada uma das operações REST disponíveis. veja um exemplo de GET:

```ts
 getMovies(): Observable<Array<Movie>> {
    return this._http.get<Array<Movie>>(`http://localhost:3000/movies`);
  }
...
}
```

Toda requisição rest feita é um processo assíncrono, isso significa que ao fazer uma determinada requisição, temos que esperar o servidor responder e, aí sim executar determinada lógica. Existem várias formas de tratar essa assincronicidade, as mais comuns sendo a `Promise` e o `Observable`.

A Promise consiste em uma promessa. Isso significa que, de maneira bem simples, ao invés de entregar um resultado na hora, eu vou fazer uma promessa de que aquele resultado existirá, É o famoso "Devo não nego, pago quando puder". (veja mais em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

O Observable consiste em um padrão de projeto que de maneira bem simples, `observa um objeto e notifica a sua mudança de estado` (veja mais em: https://www.devmedia.com.br/o-padrão-de-projeto-observer/22861 ).

#### Observable

É bom lembrar que como padrão, as funções do HttpClient retornam um `Observable`. Isso significa que, para ter acesso à resposta, temos que fazer um subscribe.

```ts
  this._movieService.getMovies().subscribe(
      (movies) => {
      ...
      },
      (error) => {
        ...
      }
    );
...
}
```

Por se tratar de um observable, isso significa que podemos utilizar as várias ferramentas que a `rxjs` possui. Através do `pipe`, podemos adicionar por exemplo um `tratamento de erros` já no próprio service e até mesmo adicionar um `retry`, para tentar a requisição novamente caso ela de erros.

```ts
 return this._http.get<Array<Movie>>(`${environment.apiUrl}movies`).pipe(
      retry(3),
      catchError((error) => {
        ...
        return throwError(error.message);
      })
    );
```

#### Promisse

`Todo Observable pode ser convertido facilmente em promise` e, portanto, podemos transformar uma requisição do httpClient em promise, caso seja conveniente. Para isso, basta adicionar um `.toPromise()`.

```ts
  async getMoviesAsync(): Promise<Array<Movie>> {
    return await this._http
      .get<Array<Movie>>(`${environment.apiUrl}movies`).toPromise();
  }
```

E portanto a chamada da função ficaria:

```ts
  async getMovies() {
    this.movies = await this._movieService.getMoviesAsync();
  }
```

Mas por que usar promises ao invés de observables? Um dos motivos é a dependência de uma certa parte do código com relação à requisição. Em outras palavras, dependendo do cenário, precisamos esperar o resultado da requisição para aí sim executar alguma lógica. Podemos fazer isso facilmente utilizando o `async` e o `await`.

#### JSON Server

Em nosso exemplo, vamos buscar de um servidor, dados de vários filmes. Para isso, vamos utilizar um fake Backend com a lib JSON Server. Essa lib, basicamente cria um server node que disponibiliza um json como serviço. Para mais detalhes olhe o site: https://www.npmjs.com/package/json-server.

Para utilizar o JSON Server basta instalar de forma global

```
npm install -g json-server
```

Após a instalação, na pasta deste projeto execute:

```
json-server --watch db.json
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
