function calculo(){
    var valorDeEntrada = document.getElementById("valorEntrada").value; // recebe o valor do input "insira o valor"

    var medidaDeEntradaInicial = document.getElementById('medidaDeEntrada').value; // recebe o valor do <option> da tag <select>
    var medidaConvertidaRetorno = document.getElementById('medidaConvertida').value; // recebe o valor do <option> da tag <select>

    console.log(valorDeEntrada);
    //Medida de entrada = Celsius 
    if (medidaDeEntradaInicial == "celsius") {
        if (medidaConvertidaRetorno == "fahrenheit") {
            var operacao = (valorDeEntrada * 9/5)+32;                    
        }

        if (medidaConvertidaRetorno == "kelvin") {
            var operacao = parseFloat(valorDeEntrada) + 273.15;
        } 
        document.getElementById("resultado").value = operacao.toFixed(2) //Retorna o valor da variavel operacao no elemento de input "resultado"
      }
      //Medida de entrada = Fahrenheit
      if (medidaDeEntradaInicial == "fahrenheit") {
          if (medidaConvertidaRetorno == "celsius"){
              var operacao = (valorDeEntrada -32)*5/9;
          }
          if(medidaConvertidaRetorno == "kelvin"){
              var operacao = (valorDeEntrada - 32) * 5/9 + 273.15;
          }
          document.getElementById("resultado").value = operacao.toFixed(3) //Retorna o valor da variavel operacao no elemento de input "resultado"
      }
      //Medida entrada = Kelvin
      if (medidaDeEntradaInicial == "kelvin"){
          if(medidaConvertidaRetorno == "celsius"){
              var operacao = valorDeEntrada - 273.15;
          }
          if(medidaConvertidaRetorno == "fahrenheit"){
              var operacao = (valorDeEntrada - 273.15) * 9/5 + 32;
          }
          document.getElementById("resultado").value = operacao.toFixed(2) //Retorna o valor da variavel operacao no elemento de input "resultado"
      }
                         
      console.log(operacao);
    }