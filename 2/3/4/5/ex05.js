// 1. Pedimos os dois números
let inicio = Number(prompt("Digite o número inicial do intervalo:"));
let fim = Number(prompt("Digite o número final do intervalo:"));

let pares = "";

// 2. O loop começa no 'inicio' e vai até o 'fim'
for (let i = inicio; i <= fim; i++) {
    
    // 3. Verificamos se o número é par
    // O operador % calcula o resto da divisão. Se for 0, o número é par.
    if (i % 2 === 0) {
        pares = `${pares} ${i}`;
    }
}

// 4. Exibimos o resultado
if (pares === "") {
    alert("Não existem números pares nesse intervalo.");
} else {
    alert(`Os números pares entre ${inicio} e ${fim} são:\n${pares.trim()}`);
}