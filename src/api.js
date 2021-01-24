import axios from "axios";

export async function cityApi() {
  const cityObject = await axios.get(`https://api.hh.ru/areas/5`);
  const data = cityObject.data.areas;

  const cities = [];
  data.forEach((element) => {
    cities.push(...element.areas);
  });

  return cities.map((e) => e.name);
}
