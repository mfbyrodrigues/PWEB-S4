// Classificação de idade

let idade = prompt ("Digite sua idade:"); // Atribuição de variável de acordo com o que o usuário digitar 

// Condicional que compara a 'idade' digitada e retorna a respectiva classificação
if (idade <= 12) { 

    console.log ("Criança!");
}
else if (idade >= 12 && idade <= 17) {

    console.log ("Adolescente!");
}
else if (idade >= 18 && idade <= 59) {

    console.log ("Adulto!");
}
else if (idade >= 60) {

    console.log ("Idoso!");
}