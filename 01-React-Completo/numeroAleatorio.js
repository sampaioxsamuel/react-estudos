export default function Aleatorio(numero) {
  return Math.floor(Math.random() * numero);
}

export function aleatorioEntre(comeca, termina) {
  return Math.floor(Math.random() * (termina - comeca + 1) + comeca);
}
