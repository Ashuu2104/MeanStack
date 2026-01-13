# VADODARA WEATHER API SETUP GUIDE

## 📍 Project Overview
This Weather.js file fetches real-time weather data for Vadodara, India using the OpenWeatherMap API.

## 🔧 How to Use

### Step 1: Get Your API Key
1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Generate your API key from the dashboard
4. It may take 10 minutes to activate

### Step 2: Update the API Key in Weather.js
Replace 'YOUR_REAL_API_KEY_HERE' on line 4 with your actual API key:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

### Step 3: Run the Script
```bash
node Weather.js
```

## 📊 Features Included

### Configuration Constants
- DEFAULT_CITY: 'Vadodara' (hardcoded)
- CITY_COORDINATES: {lat: 22.3072, lon: 73.1812} (Vadodara exact coordinates)

### Available Functions

1. **getWeatherByCityName(city, callback)**
   - Fetch weather by city name
   - Example: getWeatherByCityName('Vadodara', displayWeatherData)

2. **getWeatherByCoordinates(lat, lon, callback)**
   - Fetch weather by latitude and longitude
   - Example: getWeatherByCoordinates(22.3072, 73.1812, displayWeatherData)

3. **getVadodaraWeatherByCity(callback)**
   - Get weather for Vadodara using city name
   - Built-in function for convenience

4. **getVadodaraWeatherByCoordinates(callback)**
   - Get weather for Vadodara using coordinates
   - More precise than city name lookup

5. **displayWeatherData(error, data)**
   - Display formatted weather information
   - Shows temperature, humidity, wind speed, etc.

## 📈 Output Data Returned

The API response includes:
- City name and country
- Current temperature (°C)
- Feels like temperature
- Min/Max temperature
- Humidity (%)
- Pressure (hPa)
- Weather condition (Clear, Cloudy, Rainy, etc.)
- Weather description
- Wind speed (m/s) and direction
- Cloud coverage (%)
- Visibility (meters)
- Sunrise and sunset times

## 📋 Example Output

========== VADODARA WEATHER DATA =========
City: Vadodara
Country: IN
Temperature: 28.5°C
Humidity: 65%
Wind Speed: 5.2 m/s
Weather: Partly Cloudy
=========================================

## ⚙️ Technical Details

- **Runtime**: Node.js 18+ (uses native fetch API)
- **API**: OpenWeatherMap Free Tier
- **Units**: Metric (Celsius, m/s)
- **Error Handling**: Callback-based error handling
- **Module Export**: All functions are exported for reuse

## 🔌 Using as a Module

```javascript
const weather = require('./Weather');

// Fetch Vadodara weather
weather.getVadodaraWeatherByCity((error, data) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('City:', data.name);
    console.log('Temp:', data.main.temp + '°C');
  }
});
```

## 🎯 Current Configuration
- City: Vadodara, Gujarat, India
- Latitude: 22.3072
- Longitude: 73.1812
- Timezone: IST (UTC+5:30)

## ✅ Troubleshooting

**Error: "Unable to find city"**
- Check if the city name spelling is correct
- Try using coordinates instead

**Error: "401 Unauthorized"**
- Your API key is invalid or missing
- Verify you copied the API key correctly
- Wait 10 minutes for key activation

**No data returned**
- Check your internet connection
- Verify API is active on openweathermap.org
- Check the browser console for network errors

## 📚 Exported Functions

```javascript
module.exports = {
  getWeatherByCityName,           // Generic city search
  getWeatherByCoordinates,        // Coordinate-based search
  getVadodaraWeatherByCity,       // Vadodara by city name
  getVadodaraWeatherByCoordinates,// Vadodara by coordinates
  displayWeatherData,             // Format and display data
  DEFAULT_CITY,                   // 'Vadodara'
  CITY_COORDINATES                // {lat: 22.3072, lon: 73.1812}
};
```

## 🔗 Useful Links

- OpenWeatherMap API: https://openweathermap.org/api
- API Documentation: https://openweathermap.org/current
- Free Tier Info: https://openweathermap.org/price
- Node.js Fetch: https://nodejs.org/api/fetch.html

---

**Last Updated**: January 7, 2026
**Location**: Vadodara, Gujarat, India
**Status**: ✅ Ready to Use