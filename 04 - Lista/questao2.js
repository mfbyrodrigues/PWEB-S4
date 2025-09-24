// Aprovado ou reprovado (Térnario)

let nota_final = prompt ("Insira a nota final:"); // Atribuição de variável de acordo com o que o usuário digitar 

let parecerAluno = (nota_final >= 7) ? "Aprovado!" : "Reprovado!"; // Condicional térnaria que depende da 'nota_final'
console.log (parecerAluno); // Mostra se o parecer do aluno como aprovado ou reprovado