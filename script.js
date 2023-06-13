function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        var kelvin = parseFloat(temperature) + 273.15;
        result.innerHTML = temperature + " °C = " + fahrenheit.toFixed(2) + " °F = " + kelvin.toFixed(2) + " K";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5/9;
        var kelvin = (temperature - 32) * 5/9 + 273.15;
        result.innerHTML = temperature + " °F = " + celsius.toFixed(2) + " °C = " + kelvin.toFixed(2) + " K";
    } else if (unit === "kelvin") {
        var celsius = temperature - 273.15;
        var fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result.innerHTML = temperature + " K = " + celsius.toFixed(2) + " °C = " + fahrenheit.toFixed(2) + " °F";
    }
}
