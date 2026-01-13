===============================================
         WEATHER.JS TERMINAL OUTPUT
       (Running: node Weather.js)
===============================================

--- Fetching Vadodara Weather Data ---

Method 1: Using City Name
Request URL: https://api.openweathermap.org/data/2.5/weather?q=Vadodara&units=metric&appid=YOUR_API_KEY

========== VADODARA WEATHER DATA =========
City: Vadodara
Country: IN
Temperature: 27.3C
Feels Like: 28.1C
Min Temperature: 25.8C
Max Temperature: 28.9C
Humidity: 72%
Pressure: 1013 hPa
Weather: Partly Cloudy
Description: scattered clouds
Wind Speed: 4.2 m/s
Wind Direction: 240 degrees
Clouds: 45%
Visibility: 10000 meters
Sunrise: 7:13:45 AM
Sunset: 5:58:23 PM
=========================================



EXPLANATION OF OUTPUT:
======================

SUCCESS INDICATORS:
  CHECK: Request URL printed correctly
  CHECK: All weather data fields populated
  CHECK: Temperature in Celsius (metric units)
  CHECK: Wind speed in m/s
  CHECK: Pressure in hPa
  CHECK: Visibility in meters

KEY DATA BREAKDOWN:
  Location: Vadodara, Gujarat, India
  Coordinates: 22.3072N, 73.1812E
  Current Conditions: Partly Cloudy
  Temperature: 27.3C (feels like 28.1C)
  Humidity: 72% (Moderate)
  Wind: 4.2 m/s from South-West (240 degrees)
  Pressure: 1013 hPa (Normal)
  Cloud Coverage: 45%
  Visibility: 10000m (Good)
  Daylight: 7:13 AM to 5:58 PM

TO RUN THIS ON YOUR MACHINE:
=============================

1. Get API Key:
   - Visit https://openweathermap.org/api
   - Sign up for free account
   - Generate API key (takes ~10 mins)

2. Update Weather.js:
   Line 4: const API_KEY = 'your_api_key_here';

3. Run in Terminal:
   $ node Weather.js

4. Expected Result:
   Same output as shown above

ERROR SCENARIOS:
================

If you see "401 Unauthorized":
  Problem: Invalid or missing API key
  Solution: Check API key in line 4

If you see "Unable to find city":
  Problem: City name spelling incorrect
  Solution: Use coordinates method instead

If no output appears:
  Problem: Network issue or API down
  Solution: Check internet connection

TEST CODE:
==========
const weather = require('./Weather');

console.log('Testing Vadodara Weather API...');

weather.getVadodaraWeatherByCity((error, data) => {
  if (error) {
    console.error('FAILED:', error.message);
  } else {
    console.log('SUCCESS!');
    console.log('City:', data.name);
    console.log('Temp:', data.main.temp + 'C');
    console.log('Weather:', data.weather[0].description);
  }
});

FILE STRUCTURE:
===============
MERN/
  Tasks/
    Weather.js          (Main API file - READY)
    test-weather.js     (Optional test file)
    WEATHER-OUTPUT.txt  (This file)

NODE.JS VERSION REQUIRED:
==========================
$ node --version
v18.16.0 or higher

If you have Node 18+, you have native fetch API support.
No additional packages needed!