function updateTime() {
//New York City
let newYorkCityElement = document.querySelector("#new-york-city");
let newYorkCityDateElement = newYorkCityElement.querySelector(".date");
let newYorkCityTimeElement = newYorkCityElement.querySelector(".time");
let newYorkCityTime= moment().tz("America/New_York");

newYorkCityDateElement.innerHTML = newYorkCityTime.format("MMMM Do YYYY");
newYorkCityTimeElement.innerHTML = `${newYorkCityTime.format("h:mm:ss")} <small>${newYorkCityTime.format("A")}</small>`;

//Rabat
let rabatElement = document.querySelector("#rabat");
let rabatDateElement = rabatElement.querySelector(".date");
let rabatTimeElement = rabatElement.querySelector(".time");
let rabatTime= moment().tz("Africa/Casablanca");

rabatDateElement.innerHTML = rabatTime.format("MMMM Do YYYY");
rabatTimeElement.innerHTML = `${rabatTime.format("h:mm:ss")} <small>${rabatTime.format("A")}</small>`;
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += 
    `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);