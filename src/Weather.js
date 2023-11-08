import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-engine">
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
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          className="icon"
          alt="Weather Icon"
        />
        <div className="current-weather">
          <div className="temperature">
            <span>49</span>
            <div className="unit">
              <span>°F | °C</span>
            </div>
          </div>
        </div>
        <div className="weather-info">
          <div>Percipitation: 22%</div>
          <div>Humidity: 78%</div>
          <div>Wind: 6mph</div>
        </div>
      </div>
      <div className="city-info">
        <div className="city">Seattle</div>
        <div className="day">Tuesday 3:00 PM</div>
        <div className="condition">Cloudy</div>
      </div>
    </div>
  );
}
