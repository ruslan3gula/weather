import axios from "axios";

export async function weatherApi(selectedCity) {
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=7eccebbd42ed7e547dea8ed526d54fcb`
    );
    const weather = data.data;
    return weather;
  } catch (e) {
console.log(e.response);
    if (e && e.response && e.response.statusText) {
      throw Error(e.response.statusText);
    }
    throw Error(e.message || "Unknown error");
  }
}
