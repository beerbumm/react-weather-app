import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-engine">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="current">
          <img
            src={weatherData.iconUrl}
            className="icon"
            alt={weatherData.description}
          />
          <div className="current-weather">
            <div className="temperature">
              <span>{Math.round(weatherData.temperature)}</span>
              <div className="unit">
                <span>°F | °C</span>
              </div>
            </div>
          </div>
          <div className="weather-info">
            <div>Percipitation: 22%</div>
            <div>Humidity: {weatherData.humidity}%</div>
            <div>Wind: {weatherData.wind}mph</div>
          </div>
        </div>
        <div className="city-info">
          <div className="city">{weatherData.city}</div>
          <div className="day">Tuesday 3:00 PM</div>
          <div className="text-capitalize" id="condition">
            {weatherData.description}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ac70c9d220c7b6695afbf9fb3d15093";
    let city = "Seattle";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
