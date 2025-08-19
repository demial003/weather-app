import snow from "../assets/snow.png";
import rain from "../assets/rain.png";
import fog from "../assets/fog.png";
import wind from "../assets/wind.png";
import cloudy from "../assets/cloudy.png";
import partlyCloudyDay from "../assets/partly-cloudy-day.png";
import partlyCloudyNight from "../assets/partly-cloudy-night.png";
import clearDay from "../assets/clear-day.png";
import clearNight from "../assets/clear-night.png";

const getImg = (icon) => {
  switch (icon) {
    case "rain":
      return rain;
    case "snow":
      return snow;
    case "fog":
      return fog;
    case "wind":
      return wind;
    case "cloudy":
      return cloudy;
    case "partly-cloudy-day":
      return partlyCloudyDay;
    case "partly-cloudy-night":
      return partlyCloudyNight;
    case "clear-day":
      return clearDay;
    case "clear-night":
      return clearNight;
    default:
      alert("no icon found");
  }
};

export { getImg };
