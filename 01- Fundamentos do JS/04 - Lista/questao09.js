// Cálculo de desconto por categoria

console.log ("TIPOS DE CLIENTE:");
console.log ("[1] - Estudante;");
console.log ("[2] - Aposentado;");
console.log ("[3] - Regular.");

let tipo_cliente = parseInt (prompt ("Qual o seu tipo de cliente?")); // Tipo de cliente informado pelo usuário de acordo com o menu de opções acima

// Catalógo de retornos de descontos de acordo com o tipo de cliente informado
switch (tipo_cliente) {
    case 1:
        console.log ("50% de desconto!");
        break;
    case 2:
        console.log ("30% de desconto!");
        break;
    case 3:
        console.log ("Sem desconto!");
        break;
    default:
        console.log ("Ops... Tipo de cliente inválido!")
}