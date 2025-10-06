// Classificação de notas

let nota = parseFloat (prompt ("Digite uma nota de 0 a 10:")); // Nota digitada pelo usuário

// Catalógo para retornos de notas com letras de acordo com a faixa de notas com números
switch (nota) {

    case (10 || 9):
        console.log ("A");
        break;
    case (8 || 7):
        console.log ("B");
        break;
    case (6 || 5):
        console.log ("C");
        break;
    case (4 || 3):
        console.log ("D");
        break;
    case (2 || 1 || 0):
        console.log ("F");
    default:
        console.log ("Ops... Nota inválida!");
}