const saveWeather = (weatherData, setWeatherHistory, weatherHistory) => {
	const date = new Date();

	let data = {
		date: `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`,
		time: date.toLocaleTimeString(),
		city: `${weatherData.name}, ${weatherData.sys.country}`,
		temperature: weatherData.main.temp,
		description: weatherData.weather[0].description
	};

	setWeatherHistory([...weatherHistory, data]);
	alert('Weather Saved!');
};

export default saveWeather;
