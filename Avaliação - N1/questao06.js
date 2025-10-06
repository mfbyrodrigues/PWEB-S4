// Cálculo de imposto de renda

let salario_bruto = 4200;

if (salario_bruto > 0 && salario_bruto <= 2000) {

    console.log ("Isento!");
}

else if (salario_bruto > 2000 && salario_bruto <= 3500) {
    
    console.log ("7,5% de imposto!");
    let imposto = (salario_bruto * (7.5/100));
    console.log ("Imposto: R$", imposto);
}

else if (salario_bruto > 3500 && salario_bruto <= 5000) {
    
    console.log ("15% de imposto!");
    let imposto = (salario_bruto * (15/100));
    console.log ("Imposto: R$", imposto);
}

else if (salario_bruto > 5000) {

    console.log ("22.5% de imposto!");
    let imposto = (salario_bruto * (22.5/100));
    console.log ("Imposto: R$", imposto);
}