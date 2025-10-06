// Calculadora de despesas

let salario_usuario = Number (prompt ("Digite seu salário:"));

let aluguel = Number (prompt ("Informe quanto gasta com aluguel:"));
let mercado = Number (prompt("Informe quanto gasta com mercado:"));
let lazer = Number (prompt ("Informe quanto gasta com lazer:"));

let despesas = (aluguel + mercado + lazer);

if (despesas == salario_usuario) {

    console.log ("POSITIVO!");
    console.log ("Salário cobre exatamente as despesas, nada mais.");
}

else if (despesas < salario_usuario) {

    let sobra = (salario_usuario - despesas);

    console.log ("POSITIVO!");
    console.log (`Salário cobre as despesas, com uma sobra de ${sobra} reais!`);
} 

else {
    console.log ("NEGATIVO!");
    console.log ("Putz... Salário não cobre as despesas.");
}