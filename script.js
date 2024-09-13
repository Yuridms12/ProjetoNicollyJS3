let notas = [5.5, 8, 6, 6.5, 9];
        
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

console.log("Todas as notas:");
notas.forEach((nota) => {
    console.log(nota);
});

notas.push(8.6);
notas.shift();
console.log("Notas depois de adicionar uma nova nota e remover a primeira nota:");
console.log(notas);

console.log("Todas as notas:");
notas.forEach((nota) => {
    console.log(nota);
});

let media = notas.reduce((calculo, nota) => calculo + nota, 0) / notas.length;
console.log(`A média das notas(Utilizando as notas depois do push e shift) é: ${media}`);

let filtronotas7 = notas.filter((nota) => {
    return nota > 7;
});
console.log("Notas que são maiores que 7:", filtronotas7);

console.log("Notas em ordem crescente:", notas.sort());

if (notas.includes(6.5)) {
    console.log("Sim, a nota 6.5 está presente nas notas do alunos")
} else {
    console.log("Não, a nota 6.5 não está presente nas notas do alunos.");
}

let indinota8 = 8.0;
let indexnota = notas.indexOf(indinota8);
console.log(`O índice da nota ${indinota8} é: ${indexnota}`);

let mapquadrado = notas.map((nota) => {
    return nota * nota;
});
console.log("Notas ao quadrado:", mapquadrado);