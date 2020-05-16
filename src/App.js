import React, { Fragment, Component } from 'react';
import Search from './Search';
import Weather from './weather';
import './css/weather-icons.css';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			sunrise: undefined,
			sunset: undefined,
			sky: undefined,
			wind: undefined,
			location: '',
			feels_like: undefined,
			min: undefined,
			max: undefined,
			humidity: undefined,
			temp: undefined,
			icon: undefined,
			metric: undefined,
			error: false,
		};

		this.weatherIcon = {
			Thunderstorm: 'wi-thunderstorm',
			Drizzle: 'wi-sleet',
			Rain: 'wi-storm-showers',
			Snow: 'wi-snow',
			Atmosphere: 'wi-fog',
			Clear: 'wi-day-sunny',
			Clouds: 'wi-day-fog',
		};
	}

	get_WeatherIcon(icons, rangeId) {
		switch (true) {
			case rangeId >= 200 && rangeId < 232:
				this.setState({ icon: icons.Thunderstorm });
				break;
			case rangeId >= 300 && rangeId <= 321:
				this.setState({ icon: icons.Drizzle });
				break;
			case rangeId >= 500 && rangeId <= 521:
				this.setState({ icon: icons.Rain });
				break;
			case rangeId >= 600 && rangeId <= 622:
				this.setState({ icon: icons.Snow });
				break;
			case rangeId >= 701 && rangeId <= 781:
				this.setState({ icon: icons.Atmosphere });
				break;
			case rangeId === 800:
				this.setState({ icon: icons.Clear });
				break;
			case rangeId >= 801 && rangeId <= 804:
				this.setState({ icon: icons.Clouds });
				break;
			default:
				this.setState({ icon: icons.Clouds });
		}
	}

	setUnit = (unit) => {
		this.setState({ metric: unit });
	};

	fetchWeather = async (e) => {
		e.preventDefault();

		const zip = e.target.elements.zip.value;
		const unit = e.target.elements.unit.value;

		const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${unit}&appid=${process.env.REACT_APP_APPID}`;

		if (zip && unit) {
			let call = await fetch(URL);
			let res = await call.json();

			if (res.cod === '404') {
				this.setState({
					error: true,
				});
				return;
			} else {
				this.setState({
					sunrise: res.sys.sunrise,
					sunset: res.sys.sunset,
					sky: res.weather[0].main,
					wind: res.wind.speed,
					location: res.name,
					temp: res.main.temp,
					feels_like: res.main.feels_like,
					min: res.main.temp_min,
					max: res.main.temp_max,
					humidity: res.main.humidity,
					metric: unit,
					error: false,
				});
			}

			this.get_WeatherIcon(this.weatherIcon, res.weather[0].id);
		} else {
			this.setState({
				error: true,
			});
		}
	};

	render() {
		return (
			<Fragment>
				<Search
					fetchWeather={this.fetchWeather}
					error={this.state.error}
					unit={this.setUnit}
				/>
				<Weather
					sunrise={this.state.sunrise}
					sunset={this.state.sunset}
					sky={this.state.sky}
					wind={this.state.wind}
					location={this.state.location}
					feels_like={this.state.feels_like}
					tempmin={this.state.min}
					tempmax={this.state.max}
					humidity={this.state.humidity}
					temp={this.state.temp}
					weatherIcon={this.state.icon}
					unit={this.state.metric}
				/>
			</Fragment>
		);
	}
}

export default App;
