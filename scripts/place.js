const MIN_TEMP = 50;
const MIN_WIND = 3;

const temperature = 31;
const windSpeed = 15;
const windDirection = 'NW';

document.querySelector('#temperature').innerHTML = `${temperature}° F`;
document.querySelector('#wind-speed').innerHTML = `${windSpeed} ${windDirection}`;
if (temperature <= MIN_TEMP && windSpeed > MIN_WIND) {
    document.querySelector('#wind-chill').innerHTML = `${calculateWindchill(temperature, windSpeed)}°`;
}

function calculateWindchill(temperature, windSpeed, unit = "F") {
    // Check for valid unit
    if (unit !== "F" && unit !== "C") {
        throw new Error("Invalid unit. Please use 'F' for Fahrenheit or 'C' for Celsius.");
    }

    // Formula coefficients for Fahrenheit
    const fahrenheitCoefficients = {
        a: 35.74,
        b: 0.6215,
        c: 35.75,
        d: 0.4275,
    };

    // Formula coefficients for Celsius
    const celsiusCoefficients = {
        a: 13.12,
        b: 0.6215,
        c: 11.37,
        d: 0.3965,
    };

    // Select coefficients based on unit
    const coefficients = unit === "F" ? fahrenheitCoefficients : celsiusCoefficients;

    // Windchill calculation
    const windchill = coefficients.a +
        coefficients.b * temperature -
        coefficients.c * Math.pow(windSpeed, 0.16) +
        coefficients.d * temperature * Math.pow(windSpeed, 0.16);

    // Round the windchill value
    return Math.round(windchill);
}