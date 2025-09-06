// index.js
function somenteNumeros(str) {
  return (str || "").replace(/\D/g, "");
}

function sequencia(cpf) {
  return cpf.split("").every(ch => ch === cpf[0]);
}

function calculaDigito(numeros) {
  let soma = 0;
  for (let i = 0, j = numeros.length + 1; i < numeros.length; i++, j--) {
    soma += Number(numeros[i]) * j;
  }
  const mod = soma % 11;
  return mod < 2 ? 0 : 11 - mod;
}

function validarCPF(input) {
  const cpf = somenteNumeros(input);
  if (cpf.length !== 11) return false;
  if (sequencia(cpf)) return false;

  const base = cpf.slice(0, 9);
  const d1 = calculaDigito(base);
  const d2 = calculaDigito(base + d1);

  return cpf === base + String(d1) + String(d2);
}

// Exemplos de teste
const exemplos = [
  "529.982.247-25", // válido
  "123.456.789-09", // inválido
  "111.111.111-11", // inválido
  "935.411.347-80"  // válido
];

for (const cpf of exemplos) {
  console.log(cpf, "=>", validarCPF(cpf));
}
