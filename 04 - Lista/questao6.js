// Verificação de login

// Constantes declaradas
const username = "n.nandcchi";
const password = "777mf";

// Tentativas de entradas de usuário
let try_username = prompt ("Digite seu nome de usuário:");
let try_password = prompt("Digite sua senha:");

// Verifica se as tentativas de login então corretas
if (try_username == username && try_password == password) { // Se as tentativas forem iguais as constantes, o login é feito
    console.log ("Login feito com sucesso!");
} else { // Se não, sem login
    console.log ("Ops... Nome de usuário ou senha incorretos!");
}