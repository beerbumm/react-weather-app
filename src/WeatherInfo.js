import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature fahrenheit={props.data.temperature} />
         
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
