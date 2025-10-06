// Calcular delta

let a;
let b;
let c;

function calculaDelta (a, b, c) {

    let delta = ((b**2)-4*a*c);
    return delta;
}

valor_delta = calculaDelta (1, -5, 6);
console.log (valor_delta);