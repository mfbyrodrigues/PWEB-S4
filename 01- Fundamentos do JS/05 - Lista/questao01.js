// Conversor de moeda

let valor_real = prompt ("Digite um valor em real:");

let taxas = {
  dolar: 0.19,
  euro: 0.16
};

function converteMoeda (valor_real) {
  
  let valor_dolar = (valor_real / taxas.dolar);
  let valor_euro = (valor_real / taxas.euro);
  
  return {
    dolar: valor_dolar,
    euro: valor_euro
  };
}

let retorno = converteMoeda (valor_real);
console.log (`Dolar: ${retorno.dolar} \n Euro: ${retorno.euro}`);