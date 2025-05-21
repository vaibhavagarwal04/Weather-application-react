import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setError] = useState(false);
  let [notFound, setNotFound] = useState(false); 
  let API_URL = import.meta.env.VITE_API_URL;
  let API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setNotFound(true);
          throw new Error("City not found");
        } else {
          throw new Error("API error");
        }
      }

      let jsonResponse = await response.json();
      let result = {
        city: city,
        feelsLike: jsonResponse.main.feels_like,
        temp: jsonResponse.main.temp,
        tempMIN: jsonResponse.main.temp_min,
        tempMAX: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
    setNotFound(false); 
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      let newInfo = await getWeatherInfo();
      setCity("");
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  if (notFound) {
    return (
      <div className="SearchBox" style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>404 Not Found</h1>
        <p>Sorry, the city you entered was not found.</p>
      </div>
    );
  }

  else{
    return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          error={err}
          helperText={err ? "Please enter a valid city name" : ""}
         size="Normal"/>
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
  }
}
