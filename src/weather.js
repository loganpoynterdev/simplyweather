import React from 'react';
import './css/weather-icons.css';
import { Header, Container, Grid, Divider } from 'semantic-ui-react';
import { format } from 'date-fns';

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
			<Container textAlign='center'>
				{props.unit === 'imperial' && (
					<Grid columns='3' textAlign='center'>
						<Grid.Row
							textAlign='center'
							style={{
								'padding-top': '40px',
							}}>
							<Header as='h1'>
								Current weather for
								<br /> {props.location}
							</Header>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row textAlign='center'>
							<Grid.Column textAlign='center' width={3}>
								<i
									className={`wi ${props.weatherIcon}`}
									style={{ 'font-size': '80px' }}
								/>
								<Header as='h2'>Sky: {props.sky}</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								'padding-top': '50px',
							}}>
							<Grid.Column>
								<Header as='h2'>
									Temp: <br />
									{props.temp}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Max: <br />
									{props.tempmax}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Min: <br />
									{props.tempmin}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Feels Like: <br />
									{props.feels_like}
									<i
										className={`wi wi-fahrenheit`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>
									Humidity: <br />
									{props.humidity}%
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Wind: <br />
									{props.wind}mph
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row
							style={{
								'text-align': 'center',
							}}>
							<Grid.Column width='9' style={{ padding: '20px' }}>
								<Header as='h2'>
									Sunrise: <br />
									{format(new Date(props.sunrise * 1000), 'Pp')}
								</Header>
								<i
									className={`wi wi-sunrise`}
									style={{ 'font-size': '36px' }}
								/>
							</Grid.Column>
							<Grid.Column width='9' style={{ padding: '20px' }}>
								<Header as='h2'>
									Sunset: <br />
									{format(new Date(props.sunset * 1000), 'Pp')}
								</Header>
								<i className={`wi wi-sunset`} style={{ 'font-size': '36px' }} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}{' '}
				{props.unit === 'metric' && (
					<Grid columns='3' textAlign='center'>
						<Grid.Row textAlign='center' style={{}}>
							<Header as='h1'>
								Current weather for <br />
								{props.location}
							</Header>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column width={3}>
								<i
									className={`wi ${props.weatherIcon}`}
									style={{ 'font-size': '64px' }}
								/>
								<Header as='h2'>Sky: {props.sky}</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Temp: <br />
									{props.temp}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Max: <br />
									{props.tempmax}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>

							<Grid.Column>
								<Header as='h2'>
									Min: <br />
									{props.tempmin}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Feels Like: <br />
									{props.feels_like}
									<i
										className={`wi wi-celsius`}
										style={{ 'font-size': '36px' }}
									/>
								</Header>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>
									Humidity: <br />
									{props.humidity}%
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Wind: <br />
									{props.wind}mph
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Divider hidden section />
						<Grid.Row style={{}}>
							<Grid.Column>
								<Header as='h2'>
									Sunrise: <br />
									{new Date(props.sunrise * 1000).toLocaleString()}
								</Header>
								<i
									className={`wi wi-sunrise`}
									style={{ 'font-size': '36px' }}
								/>
							</Grid.Column>
							<Grid.Column>
								<Header as='h2'>
									Sunset: <br />
									{new Date(props.sunset * 1000).toLocaleString()}
								</Header>
								<i className={`wi wi-sunset`} style={{ 'font-size': '36px' }} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				)}
			</Container>
		);
	}
};

export default Weather;
