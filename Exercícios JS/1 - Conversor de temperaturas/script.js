function ConversorDeTemperaturas(source, valNum) {
    valNum = parseFloat(valNum);
    var fahrenheit = document.getElementById("fahrenheit");
    var celsius = document.getElementById("celsius");
    var kelvin = document.getElementById("kelvin");

    if (source == "fahrenheit") {
        celsius.value = ((valNum - 32) / 1.8).toFixed(2);
        kelvin.value = (((valNum - 32) /1.8) + 273.15).toFixed(2);
    }
    if (source == "celsius") {
        fahrenheit.value = ((valNum * 1.8) + 32).toFixed(2);
        kelvin.value = ((valNum) + 273.15).toFixed(2);
    }
    if (source == "kelvin") {
        fahrenheit.value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
        celsius.value = ((valNum) - 273.15).toFixed(2);
    }
}