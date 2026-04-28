let somaNotas = 0;
let quantidadeDeNotas = 5;

// O loop roda exatamente 5 vezes
for (let i = 1; i <= quantidadeDeNotas; i++) {
    let nota = Number(prompt(`Digite a ${i}ª nota:`));
    
    // Somamos a nota digitada ao total acumulado
    somaNotas = somaNotas + nota;
}

// Calculamos a média (total dividido por 5)
let media = somaNotas / quantidadeDeNotas;

// Exibimos o resultado
alert(`A média das 5 notas é: ${media.toFixed(2)}`);