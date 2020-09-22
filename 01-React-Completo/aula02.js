/* modules
import { perimetroQuadrado } from './quadrado.js';
import { aleatorioEntre } from './numeroAleatorio.js';

const começa = 100;
const termina = 150;

console.log(aleatorioEntre(começa, termina));

console.log(perimetroQuadrado(4));
*/

// Fetch
/*

let id = 0;

const getID = (anime) =>
  fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}`);

getID('Alquemist') // vai pegar o id do anime
  .then((response) => response.json())
  .then((result) => {
    id = result.results[0].mal_id;
    return id;
  });

<------------------->
// Async e await + promises
const apiCall = async (nome) => {
  const api = await fetch(`https://api.jikan.moe/v3/search/anime?q=${nome}`);
  const json = await api.json();
  return json.results[0];
};

const naruto = apiCall('Naruto');

// Tratando a promise
naruto.then((result) => {
  // console.log(result.title);
});

// console.log(naruto);
*/

// Filter e map

const precos = [
  'Crédito',
  '200',
  '400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

// Retorna uma array nova, que contem os items em
// que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes('R$'));

// Retorna uma nova array, modificada com o
// retorno de cada item da função
const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);
