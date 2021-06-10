import React from "react";
import Temperture from "./Temperture";
import WeatherPic from "./WeatherPic";
function WeatherInfo({ WeatherData }) {
  let description = WeatherData.weather[0].description.split("");
  description[0] = description[0].toUpperCase();
  description = description.join("");
  return (
    <div className="WeatherInfo">
      <div className="left_block">
        <div className="city_name">{WeatherData.name}</div>
        <Temperture
          temp={WeatherData.main.temp}
          feels_like={WeatherData.main.feels_like}
        />
      </div>
      <div className="right_block">
        <WeatherPic />
        <div className="weather_description">{description}</div>
      </div>
    </div>
  );
}

export default WeatherInfo;
