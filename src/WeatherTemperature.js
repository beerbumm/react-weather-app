import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="temperature">
        <span>{Math.round(props.fahrenheit)}</span>
        <div className="unit">
          <span>
            °F |{" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="temperature">
        <span>{Math.round(celsius)}</span>
        <div className="unit">
          <span>
            <a href="/" onClick={convertToFahrenheit}>
              °F{" "}
            </a>
            | °C
          </span>
        </div>
      </div>
    );
  }
}
