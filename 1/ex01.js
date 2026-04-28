// let mensagem ="1 2 3 4 5 6 7 8 9 10";
// for(let contador = 1; contador <= 10; contador++); {


// mensagem = `${mensagem} ${contador}`;

// alert(mensagem)};

const num = Number(prompt("Digite um Número aleatório"));
let mensagem ="";

for (let contador = 0; contador <= num; contador++) {
    mensagem = `${mensagem} ${contador}`;
}

alert(mensagem);