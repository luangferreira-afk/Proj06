let oxigenio = Number(prompt("Insira a quantidade oxigênio restante (em litros):"));
let pessoas = Number(prompt("Insira a quantidade pessoas em marte:"));
const consumoDiario = 15; // litros por pessoa

let consumoTotalBase = pessoas * consumoDiario;
let diasRestantes = oxigenio / consumoTotalBase;

alert("Relatório de Marte: Restam " + diasRestantes.toFixed(0) + " dias de oxigênio.");