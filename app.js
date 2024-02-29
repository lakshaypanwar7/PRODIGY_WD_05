
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f5498902dmsh4be59054e28d53bp191a8bjsncd12135746d0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const optionsForcast = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f5498902dmsh4be59054e28d53bp191a8bjsncd12135746d0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	// cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		todayTemp.innerText = (response.temp+"°C");
		humidity.innerText = (response.humidity);
		wind.innerText = (response.wind_speed);
		sunrise.innerText = (response.sunrise);
		sunset.innerText = (response.sunset);

	})
	.catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
})