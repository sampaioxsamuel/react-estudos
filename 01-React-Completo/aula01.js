// Destructuring array e objs

const quadradobj = {
  lados: 4,
  total: function (lados) {
    return 4 * lados;
  },
};

const { total } = quadradobj;

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [quadrado, lados] = useQuadrado;

// Rest operator
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

/*
showList('Google', ['Samuel', 'João', 'Maria']); // sem o rest é preciso usar um array como argumento
showList('Google', 'Samuel', 'João', 'Maria'); // usando o rest, ele ira pegar todos os elementos depois do 'google' e ira transformar em um array
*/

// Spread Operator

const numeros = [45, 50, 10, 60, 90];
const maior = Math.max(...numeros); //esse objeto por default nao aceita arrays como argumento, somente
console.log(maior);

// tbm pode ser usado para clonar um array/adicionar valores de um determinado array em outro

const numeros2 = [20, 666, ...numeros, 555];
console.log(numeros2);

// pode ser usado com objetos tbm

const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro }; // ele tera todas as props do obj(carro) + um nova propriedade

console.log(cloneCarro);
console.log(carroEsportivo);
