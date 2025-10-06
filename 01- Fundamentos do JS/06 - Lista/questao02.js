// Conversão de distâncias

let distancia_quilometros = Number (prompt ("Digite uma distância, em quilometros:"));

let distancia_metros = (distancia_quilometros * 1000);
let distancia_centimetros = (distancia_quilometros * 100000); 
let distancia_milimetros = (distancia_quilometros * 1000000);

console.log ("Metros: ", distancia_metros);
console.log ("Centímetros: ", distancia_centimetros);
console.log ("Milimetros: ", distancia_milimetros);