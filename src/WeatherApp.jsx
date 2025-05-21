import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,SetWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 44.39,
        humidity: 37,
        temp: 39.05,
        tempMAX: 39.05,
        tempMIN: 39.05,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} ></SearchBox>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
