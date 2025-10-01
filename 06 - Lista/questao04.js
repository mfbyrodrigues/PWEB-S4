// Maior e menor número

let n1 = Number (prompt ("Digite o primeiro número:"));
let n2 = Number (prompt ("Digite o segundo número:"));
let n3 = Number (prompt ("Digite o terceiro número:"));

if (n1 > n2 && n1 > n3) {
    
    maior = n1;
}

else {

    menor = n1;
}

if (n2 > n1 && n2 > n3) {
    
    maior = n2;
}

else {

    menor = n2;
}

if (n3 > n1 && n3 > n2) {
    
    maior = n3;
}

else {

    menor = n3;
}

console.log ("Maior número: ", maior);
console.log ("Menor número: ", menor);