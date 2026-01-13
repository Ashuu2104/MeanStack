// Weather.js (Node 18+ with native fetch)

const API_KEY = 'YOUR_REAL_API_KEY_HERE'; // Get from https://openweathermap.org/api
const DEFAULT_CITY = 'Vadodara';
const CITY_COORDINATES = { lat: 22.3072, lon: 73.1812 }; // Vadodara, India

function getWeatherByCoordinates(lat, lon, callback) {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?` +
    `lat=${lat}` +
    `&lon=${lon}` +
    `&units=metric` +
    `&appid=${API_KEY}`;

  console.log('Request URL:', url);

  fetch(url)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        console.error('OpenWeather error body:', data);
        const msg = data.message || `HTTP error ${response.status}`;
        throw new Error(msg);
      }
      return data;
    })
    .then((data) => callback(null, data))
    .catch((error) => callback(error, null));
}

function getWeatherByCityName(city, callback) {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?` +
    `q=${encodeURIComponent(city)}` +
    `&units=metric` +
    `&appid=${API_KEY}`;

  console.log('Request URL:', url);

  fetch(url)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        console.error('OpenWeather error body:', data);
        const msg = data.message || `HTTP error ${response.status}`;
        throw new Error(msg);
      }
      return data;
    })
    .then((data) => callback(null, data))
    .catch((error) => callback(error, null));
}

// Get Vadodara Weather by City Name
function getVadodaraWeatherByCity(callback) {
  getWeatherByCityName(DEFAULT_CITY, callback);
}

// Get Vadodara Weather by Coordinates
function getVadodaraWeatherByCoordinates(callback) {
  getWeatherByCoordinates(CITY_COORDINATES.lat, CITY_COORDINATES.lon, callback);
}

// Display Weather Data
function displayWeatherData(error, data) {
  if (error) {
    console.error('Error fetching weather:', error.message);
    return;
  }

  console.log('\n========== VADODARA WEATHER DATA =========');
  console.log(`City: ${data.name}`);
  console.log(`Country: ${data.sys.country}`);
  console.log(`Temperature: ${data.main.temp}°C`);
  console.log(`Feels Like: ${data.main.feels_like}°C`);
  console.log(`Min Temperature: ${data.main.temp_min}°C`);
  console.log(`Max Temperature: ${data.main.temp_max}°C`);
  console.log(`Humidity: ${data.main.humidity}%`);
  console.log(`Pressure: ${data.main.pressure} hPa`);
  console.log(`Weather: ${data.weather[0].main}`);
  console.log(`Description: ${data.weather[0].description}`);
  console.log(`Wind Speed: ${data.wind.speed} m/s`);
  console.log(`Wind Direction: ${data.wind.deg}°`);
  console.log(`Clouds: ${data.clouds.all}%`);
  console.log(`Visibility: ${data.visibility} meters`);
  console.log(`Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`);
  console.log(`Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`);
  console.log('=========================================\n');
}

// Fetch and display Vadodara weather
console.log('\n--- Fetching Vadodara Weather Data ---\n');
// console.log('Method 1: Using City Name');
// getVadodaraWeatherByCity(displayWeatherData);

// You can also fetch by coordinates:
console.log('Method 2: Using Coordinates');
getVadodaraWeatherByCoordinates(displayWeatherData);

// Export functions for use as module
module.exports = {
  getWeatherByCityName,
  getWeatherByCoordinates,
  getVadodaraWeatherByCity,
  getVadodaraWeatherByCoordinates,
  displayWeatherData,
  DEFAULT_CITY,
  CITY_COORDINATES
};