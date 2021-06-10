import React from "react";

function Alert({ Weather_state }) {
  if (Weather_state.cod === "404") {
    return (
      <div className="alert">
        <span>{"Вы неправильно ввели город"}</span>
      </div>
    );
  } else if (JSON.stringify(Weather_state) === "{}") {
    return (
      <div className="alert">
        <span>{"Введите город"}</span>
      </div>
    );
  }
}

export default Alert;
