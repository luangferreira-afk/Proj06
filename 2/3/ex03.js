// 1. Pedimos o número ao usuário
let numero = Number(prompt("De qual número você quer ver a tabuada?"));

// Criamos uma variável para acumular o texto da tabuada
let resultado = "";

// 2. O loop vai de 1 até 10
for (let i = 1; i <= 10; i++) {
    let multiplicacao = numero * i;
    
    // Montamos a linha: "5 x 1 = 5" (por exemplo)
    resultado += `${numero} x ${i} = ${multiplicacao}\n`;
}

// 3. Exibimos o resultado final
alert(`Tabuada do ${numero}:\n\n${resultado}`);