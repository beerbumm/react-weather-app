import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current">
        <img
          src={props.data.iconUrl}
          className="icon"
          alt={props.data.description}
        />
        <div className="current-weather">
          <div className="temperature">
            <span>{Math.round(props.data.temperature)}</span>
            <div className="unit">
              <span>°F | °C</span>
            </div>
          </div>
        </div>
        <div className="weather-info">
          <div>Percipitation: 22%</div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}mph</div>
        </div>
      </div>
      <div className="city-info">
        <div className="city">{props.data.city}</div>
        <div className="day">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="text-capitalize" id="condition">
          {props.data.description}
        </div>
      </div>
    </div>
  );
}
