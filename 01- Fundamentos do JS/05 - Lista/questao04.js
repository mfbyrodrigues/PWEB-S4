// Equações do 2º grau

function calcularDelta (a, b, c) {

    let delta = b**2-4*a*c;
    
    return delta;
}

let retorno = calcularDelta (2, 5, -3);
console.log (retorno);