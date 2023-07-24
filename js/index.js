setInterval(function () {
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
}, 1000);


