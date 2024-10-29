import express from "express";
import axios from "axios";
const app = express();

app.get("/", async (req, res) => {
  const city = "jaffna";
  const apiKey = "14503ca4c657faa90c2257e37992ce4f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  let weather;
  let error = null;

  try {
    const response = await axios.get(url);
    weather = response.data;
    res.json({
      main: weather.weather[0].main,
      description: weather.weather[0].description,
      temperature: weather.main.temp,
    });
  } catch (err) {
    weather = null;
    error = "Error, Please try again !";
    console.error(err);
    res.status(500).json({ error });
  }
});

app.listen(3000, () => {
  console.log(`Server is running: http://localhost:3000`);
});
