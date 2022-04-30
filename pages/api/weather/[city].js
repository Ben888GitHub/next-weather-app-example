const api_key = 'c752d6aeb3e9f93c7ebcea0685b9f6c3';

export default async function handler(req, res) {
	res.status(200);
	// res.json({
	// 	city: 'London',
	// 	temperature: '20',
	// 	description: 'sunny'
	// });
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city},&appid=${api_key}&units=metric`;
	const weatherRequest = await fetch(url);
	const weatherData = await weatherRequest.json();
	res.json(weatherData);
	console.log(req.query);
}
