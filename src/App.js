import React, { useEffect, useState } from "react";
import "./styles.css";
// import axios from "axios";

import AutosuggestionField from "./AutosuggestionField";
import { cityApi } from "./api";
import { weatherApi } from "./weatherApi";
import Weather from "./Weather";
// import FreeSoloCreateOption from "./FreeSoloCreateOption";

export default function App() {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("КАИР");
  const [weather, setWeather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const cities = await cityApi();
        setCity(cities);

        const selectedWeather = await weatherApi(selectedCity);
        setError(null);
        setWeather(selectedWeather);
      } catch (err) {
        setError(err);
        setWeather(null);
      }
    };
    asyncFunction();
  }, [selectedCity]);

  const getSelectedCity = (value) => {
    setSelectedCity(value);
  };

  const celsius = () => {
    if (weather) {
      console.log("celsius", weather.main.temp - 273.15);
      return weather.main.temp - 273.15;
    }
  };

  return (
    <div
      className={
        typeof weather !== "undefined"
        ? celsius() > 15
          ? "app warm"
          : "app cold"
        : ""}
    >
      <main>
        <AutosuggestionField city={city} getSelectedCity={getSelectedCity} />

        {weather && (
          <Weather
            weather={weather}
            getSelectedCity={getSelectedCity}
            city={city}
          />
        )}
        {error && <div>{`City ${error.message}`}</div>}
      </main>
    </div>
  );
}
