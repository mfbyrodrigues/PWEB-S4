// Verificação de ano bissexto

let ano = prompt ("Me diga um ano:"); // Ano digitado pelo usuário

// Condicional que varifica se o ano inserido é bissexto, ou seja, divisível por 4 e 400 ao mesmo tempo
if (ano % 4 == 0 || ano % 400 == 0) { 
    console.log ("Ano bissexto!");
} 
else {
    console.log ("Ano não bissexto!")
}