// Maior de três números

// Números digitados pelo usuário
let n1 = prompt ("Digite o primeiro número:");
let n2 = prompt ("Digite o segundo número:");
let n3 = prompt ("Digite o terceiro número:");

// Condicional que comparara o tamanho de cada número, um por um
if (n1 > n2 && n1 > n3) {
    console.log ("Maior número: " + n1);
}

else if (n2 > n1 && n2 > n3) {
    console.log ("Maior número: " + n2);
}

else {
    console.log ("Maior número: " + n3);
}