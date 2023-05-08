import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '6e7a81be99msh71df7079ced9032p149064jsndbb1b2cdf6e2',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
    return data
  }
  catch(error) {
    console.log(error)
  }
}


export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {lat: lat, lon: lng, appid: ''},
      });
      //console.log(data.coord.lat)
      //console.log(data.coord.lon)
      //console.log(data.weather[0].icon)
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

