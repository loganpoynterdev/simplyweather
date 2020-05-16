import React from 'react';
import './css/weather-icons.css';
import { Header, Container, Grid, Divider } from 'semantic-ui-react';

const Weather = (props) => {
	if (props.location === '') {
		return (
			<Container textAlign='center'>
				<Header as='h1' style={{ color: 'white', 'margin-top': '20px' }}>
					Enter location information to see your current weather
				</Header>
			</Container>
		);
	} else {
		return (
			<Container
				textAlign='center'
				style={{
					'padding-left': '65px',
					'padding-right': '65px',
				}}>
				{props.unit === 'imperial' && (
					<Grid columns='3' textAlign='center'>
						<Grid.Row
							textAlign='center'
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Header as='h1'>Current weather for {props.location}</Header>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column width={3}>
								<i
									className={`wi ${props.weatherIcon}`}
									style={{ 'font-size': '64px' }}
								/>
								<Header as='h2'>Sky: {props.sky}</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Temp: {props.temp}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Max: {props.tempmax}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Min: {props.tempmin}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Feels Like: {props.feels_like}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>Humidity: {props.humidity}%</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>Wind: {props.wind}mph</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Sunrise: {new Date(props.sunrise * 1000).toLocaleString()}
								</Header>
								<i
									className={`wi wi-sunrise`}
									style={{ 'font-size': '42px' }}
								/>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>
									Sunset: {new Date(props.sunset * 1000).toLocaleString()}
								</Header>
								<i className={`wi wi-sunset`} style={{ 'font-size': '42px' }} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}{' '}
				{props.unit === 'metric' && (
					<Grid columns='3' textAlign='center'>
						<Grid.Row
							textAlign='center'
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Header as='h1'>Current weather for {props.location}</Header>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column width={3}>
								<i
									className={`wi ${props.weatherIcon}`}
									style={{ 'font-size': '64px' }}
								/>
								<Header as='h2'>Sky: {props.sky}</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Temp: {props.temp}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Max: {props.tempmax}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Min: {props.tempmin}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Feels Like: {props.feels_like}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '42px' }}
									/>
								</Header>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>Humidity: {props.humidity}%</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>Wind: {props.wind}mph</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								height: '95px',
								'align-content': 'center',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Sunrise: {new Date(props.sunrise * 1000).toLocaleString()}
								</Header>
								<i
									className={`wi wi-sunrise`}
									style={{ 'font-size': '42px' }}
								/>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>
									Sunset: {new Date(props.sunset * 1000).toLocaleString()}
								</Header>
								<i className={`wi wi-sunset`} style={{ 'font-size': '42px' }} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}
			</Container>
		);
	}
};

export default Weather;
