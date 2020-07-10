//date
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
let hour = date.getHours();
let minutes = date.getMinutes();
let displayingDate = document.querySelector("#current-day");
if (minutes < 10) {
  minutes = `0${minutes}`;
} else {
  minutes = `${minutes}`;
}
displayingDate.innerHTML = `${day} ${hour}:${minutes}`;

//form
function find(city) {
  let apiKey = "5d4c6521db7d8a0363226daf8e26f97d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  find(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function(position) {
    do_something(position.coords.latitude, position.coords.longitude);
  });
}
//bonus
function covertFahren(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = (temperatureElement.innerHTML = 75);
}

function covertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = (temperatureElement.innerHTML = 25);
}

let fahrenheitInput = document.querySelector("#fahrenheit-input");
fahrenheitInput.addEventListener("click", covertFahren);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", covertCelsius);

find("Alabama");

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getCurrentLocation);
