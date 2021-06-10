import React from "react";

function Temperture({ temp, feels_like }) {
  return (
    <div className="Temperture">
      <div>
        Температура{temp < 0 ? "" : "+"} {Math.trunc(temp)}
        {temp > 5 ? " Градусов " : " Градуса"}
      </div>
      <div>
        Чувстуется как {temp < 0 ? "" : "+"} {Math.trunc(feels_like)}
      </div>
    </div>
  );
}

export default Temperture;
