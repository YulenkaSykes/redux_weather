import React from "react";

const CityWeather = (props) => {
  const { data } = props;
  const { main, weather, name, wind } = data;
  return (
    <div className="card_weather">
      <div className="card_text">
        <p>{name}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt=""
        />
        <p className="cloud">{weather[0].main}</p>
        <p>Temperature: {main.temp}°</p>
        <p>Speed: {wind.speed}</p>
      </div>
    </div>
  );
};

export default CityWeather;
