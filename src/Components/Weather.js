import React from "react";
import CityWeather from "./CityWeather";
import { useSelector, useDispatch } from "react-redux";

const Weather = () => {
  const value = useSelector((store) => store.value);
  const info = useSelector((store) => store.info);
  const dispatch = useDispatch();

  const getWeather = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b5b8dc1667de3e4a4210637663e628d`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "data", payload: { data } });
      });
  };

  return (
    <div>
      <div className="wrapper">
        <input
          className="input"
          type="text"
          onChange={(e) => dispatch({ type: "value", payload: e.target.value })}
        />
        <button className="btn" onClick={() => getWeather(value)}>
          Click
        </button>
      </div>

      {info.data && <CityWeather data={info.data} />}
    </div>
  );
};

export default Weather;
