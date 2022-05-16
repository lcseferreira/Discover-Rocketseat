/*

    Celsius to Fahrenheit

*/

function trasnformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Argumento inválido");
    }

    if (celsiusExists) {
        let celsius = Number(degree.slice(0, degree.toUpperCase().indexOf("C")));
        let toFahrenheit = (celsius * 9 / 5 + 32).toFixed(2);

        return toFahrenheit;
    }

    if (fahrenheitExists) {
        let fahrenheit = Number(degree.slice(0, degree.toUpperCase().indexOf("F")));
        let toCelsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);

        return toCelsius;
    }
}

try {
    console.log(trasnformDegree("50F"));
} catch (e) {
    console.log(e);
}