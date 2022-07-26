let res = 0, x;
let resultado = "";

function MissingDigit(formula) { 
  // code goes here  

  formula = formula.split(' ');
  let primeiroOperador = formula[0];
  let operador = formula[1];
  let segundoOperador = formula[2];
  let resultante = formula[formula.length-1];

  if(resultante.indexOf('x') != -1 ){
    x = resultante;
    primeiroOperador = parseInt(primeiroOperador);
    segundoOperador = parseInt(segundoOperador);

    if(operador == '+'){
      res = primeiroOperador + segundoOperador;
    }
    else if(operador == '-'){
      res = primeiroOperador - segundoOperador;
    }
    else if(operador == '*'){
      res = primeiroOperador * segundoOperador;
    }
    else{
      res = Math.floor(primeiroOperador / segundoOperador);
    }
  }
  else{
    resultante = parseInt(resultante);

    if(primeiroOperador.indexOf('x') != -1){
      x = primeiroOperador;
      segundoOperador = parseInt(segundoOperador);

      if(operador == '+'){
        res = resultante - segundoOperador;
      }
      else if(operador == '-'){
        res = resultante + segundoOperador;
      }
      else if(operador == '*'){
        res = Math.floor(resultante / segundoOperador);
      }
      else{
        res = resultante * segundoOperador;
      }
    }
    else{
      let x = segundoOperador;
      primeiroOperador = parseInt(primeiroOperador);

      if(operador == '+'){
        res = resultante - primeiroOperador;
      }
      else if(operador == '-'){
        res = primeiroOperador - resultante;
      }
      else if(operador == '*'){
        res = Math.floor(resultante / primeiroOperador);
      }
      else{
        res = Math.floor(primeiroOperador / resultante);
      }
    }
  }

  res = res.toString();
  let k = 0;
  for(let i of x){
    if(i == 'x'){
      resultado = res[k];
      break;
    }
    else{
      k++;
    }
  }


  return resultado; 

}
   
// keep this function call here 
console.log(MissingDigit(readline()));