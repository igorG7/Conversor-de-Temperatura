function calculo(){
    var valorDeEntrada = document.getElementById("valorEntrada").value; 

    var medidaDeEntradaInicial = document.getElementById('medidaDeEntrada').value; 
    var medidaConvertidaRetorno = document.getElementById('medidaConvertida').value;

    console.log(valorDeEntrada);
    //Medida de entrada = Celsius 
    if (medidaDeEntradaInicial == "celsius") {
        if (medidaConvertidaRetorno == "fahrenheit") {
            var operacao = (valorDeEntrada * 9/5)+32;                    
        }

        if (medidaConvertidaRetorno == "kelvin") {
            var operacao = parseFloat(valorDeEntrada) + 273.15;
        } 
        document.getElementById("resultado").value = operacao.toFixed(2) 
      }
      //Medida de entrada = Fahrenheit
      if (medidaDeEntradaInicial == "fahrenheit") {
          if (medidaConvertidaRetorno == "celsius"){
              var operacao = (valorDeEntrada -32)*5/9;
          }
          if(medidaConvertidaRetorno == "kelvin"){
              var operacao = (valorDeEntrada - 32) * 5/9 + 273.15;
          }
          document.getElementById("resultado").value = operacao.toFixed(2) 
      }
      //Medida entrada = Kelvin
      if (medidaDeEntradaInicial == "kelvin"){
          if(medidaConvertidaRetorno == "celsius"){
              var operacao = valorDeEntrada - 273.15;
          }
          if(medidaConvertidaRetorno == "fahrenheit"){
              var operacao = (valorDeEntrada - 273.15) * 9/5 + 32;
          }
          document.getElementById("resultado").value = operacao.toFixed(2) 
      }
                         
      console.log(operacao);
    }