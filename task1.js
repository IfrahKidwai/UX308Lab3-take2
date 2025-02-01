//1) given a temperature in kelvin convert to fahrenheit
function kelvinToFahrenheit(K) {
    // (K − 273.15) × 9/5 + 32 = °F
    let fahrenheit = (K - 273.15) * (9/5) + 32
    return fahrenheit;
}

console.log(kelvinToFahrenheit(10))