import React from "react";

import DateBuilder from "./DateBuilder";

export default function Weather(props) {
  const { weather } = props;
  const { city } = props;
  const { getSelectedCity } = props;
  // console.log("weather", weather);

  const celsius = weather.main.temp - 273.15;
  const rounded = celsius.toFixed(0);
  return (
    <div>
      {/* <input type="text" className="search-bar" placeholder="Searching..." /> */}
      <div className="location-box">
        <div className="location">{weather.name}</div>
        <DateBuilder />
        <div className="weather-box">
          <div className="temp">{rounded}&#8451;</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </div>
    </div>
  );
}
