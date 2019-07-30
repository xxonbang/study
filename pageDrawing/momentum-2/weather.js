const weather = document.getElementById("weather");
const API__KEY = "4de463dd96b5bc819612b2b9d206b15c";

const COORDS = "coords";

function getWeather(lati, longi) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API__KEY}&units=metric`)
        .then(function (Response) {
            return Response.json();
        }).then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${Math.floor(temperature)}°C at ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleSucces(location) {
    console.log(location);
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    getWeather(latitude, longitude);

    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(coordsObj);
}

function handleError() {
    alert("Can not get your location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
}

function loadCoords() {
    const coords = localStorage.getItem(COORDS);
    if (coords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(coords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();