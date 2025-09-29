// Frequência de aula

const presenca = [
    true, false, true, true, true, false, false, true, true, true,
    true, false, true, true, false, false, false, true, true, false
]

function parecer (presenca) {

    presente = presenca.filter (cada => cada === true);

    let percentual = (presente.length/presenca.length)*100;

    if (percentual >= 75) {
        console.log ("Aluno regular!");
    } else {
        console.log ("Aluno irregular!");
    }
}

parecer (presenca)