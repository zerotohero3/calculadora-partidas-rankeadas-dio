function calcularRank(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias < 21) {
    nivel = "Bronze";
  } else if (vitorias < 51) {
    nivel = "Prata";
  } else if (vitorias < 81) {
    nivel = "Ouro";
  } else if (vitorias < 91) {
    nivel = "Diamante";
  } else if (vitorias < 101) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem saldo de ${saldo} e está no nível ${nivel}.`;
}

// Exemplo
const resultado = calcularRank(80, 20);
console.log(resultado);
