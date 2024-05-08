var temperature = 10; // in Celsius
var windSpeed = 20; // in km/h

function calculateWindchill(temperature, windSpeed) {
    var windchill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windchill;
}

function displayWindchill() {
    var windchill = calculateWindchill(temperature, windSpeed);
    document.getElementById("windchill").textContent = "Windchill: " + Math.round(windchill) + "°C";
}

window.onload = function() {
    displayWindchill();
};