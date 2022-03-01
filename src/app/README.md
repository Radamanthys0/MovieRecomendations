# Ansewers

## 1 -

O primeiro nao tem erro, pq como nao foi adicionado um tipo, foi inferido o tipo any. e portanto pode aceitar qualquer coisa
ja o segundo, tem o tipo "Movie" e alguns de seus parametros estao faltando.

## 2 -

O erro acontece pq nao tem os atributos rating e type. se colocarmos da seguinte forma o erro sumirá:

```ts
const movie1: Movie = {
  title: `The Lord of The Rings: The fellowship of the rings`,
  sinopse: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron`,
  img: `https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D`,
  rating: 8.8,
  type: "movie",
};
```

`Note que o vscode nao reclamou da falta do atributo info, isso pq info é opcional`

## 3 -

O problema nesse caso é q 'song' não é um dos literais definidos no tipo MediaType criado. podemos utilizar o enum criado, ou simplesmente passar 'movie' ou 'series'.
