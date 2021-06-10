import React from "react";
import cloudy from "../img/cloudy.png";
function WeatherPic() {
  return (
    <div className="weather_pic">
      <img src={cloudy} alt="no loaded"></img>
    </div>
  );
}
export default WeatherPic;
