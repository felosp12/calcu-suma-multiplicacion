function calcular() {
    // Obtiene los valores de los inputs
    var radio = document.getElementById("radio").value;
    var altura = document.getElementById("altura").value;
  
    // Calcula el volumen y el área del cilindro
    var volumen = Math.PI * radio ** 2 * altura;
    var area = 2 * Math.PI * radio * (radio + altura);
  
    // Muestra los resultados en la página
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "El volumen es: " + volumen.toFixed(2) + " unidades cúbicas<br>";
    resultado.innerHTML += "El área es: " + area.toFixed(2) + " unidades cuadradas";
  }
  