 const latitude = 13.411593;
 const longitude = 103.867416;
  
  async function fetchWeather() {
	try {
		const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
		const data = await response.json();

		// Update the HTML content
		const currentWeather = data.current_weather;
		document.getElementById('temperature').innerText = `${currentWeather.temperature} °C`;
		document.getElementById('conditions').innerText = `Weather Code ${currentWeather.weathercode}`;
		document.getElementById('wind').innerText = `${currentWeather.windspeed} km/h`; 
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

  fetchWeather();