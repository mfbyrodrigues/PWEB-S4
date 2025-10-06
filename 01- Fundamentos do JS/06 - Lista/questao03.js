// Cadastro de aluno

let aluno = {

    nome: "Fernanda",
    idade: 18,
    curso: "Ciência da Computação",
    nota_final: 9
};

console.log (aluno);

function verificarParecer (nota_final) {

    if (nota_final >= 7) {

        return ("Aluno aprovado!");
    }

    else {

        return ("Aluno reprovado!");
    }
}

parecerVerificado = verificarParecer(aluno.nota_final);
console.log (parecerVerificado);