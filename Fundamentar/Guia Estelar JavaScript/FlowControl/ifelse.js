/*

    if ... else
    se ... senão

*/

let temperature = 37.2;

if (temperature >= 37) console.log("Fever");
else console.log("Healthy");

if (temperature >= 37) {
    console.log("Fever");
} else {
    console.log("Healthy");
}

let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature >= 37;

if (highTemperature) {
    console.log("Fever");
} else if (mediumTemperature) {
    console.log("Alert")
} else {
    console.log("Healthy");
}