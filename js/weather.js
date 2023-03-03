const API_KEY ="a8fbb14646a8839b0093c433ab0fca60";

function onGeoOk(position) {
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });
            
}

function onGeoError() {
    alert("can't find you. No weather fo r you")
} 

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
