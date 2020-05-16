import React from 'react';
import {
	Container,
	Form,
	Radio,
	Input,
	Button,
	Header,
	Segment,
	Dropdown,
} from 'semantic-ui-react';

const unit = [
	{
		key: 'Imperial',
		text: 'Imperial',
		value: 'imperial',
	},
	{
		key: 'Metric',
		text: 'Metric',
		value: 'metric',
	},
];

const Search = (props) => {
	return (
		<Container
			textAlign='center'
			style={{
				'padding-left': '65px',
				'padding-right': '65px',
				'padding-top': '40px',
			}}>
			<Form onSubmit={props.fetchWeather} autocomplete='off'>
				{props.error ? error() : ''}

				<Form.Field>
					<Input name='zip' type='text' pattern='\d*' maxLength='5' />
				</Form.Field>

				<Form.Field>
					<Radio
						name='unit'
						label='Imperial'
						value='imperial'
						style={{ 'margin-right': '80px' }}
					/>
					<Radio
						name='unit'
						label='Metric'
						value='metric'
						style={{ 'margin-left': '80px' }}
					/>
				</Form.Field>

				<Form.Field>
					<Button color='blue' fluid style={{ 'margin-top': '20px' }}>
						Get Weather
					</Button>
				</Form.Field>
			</Form>
		</Container>
	);
};

const error = (props) => {
	return (
		<Segment inverted color='red'>
			<Header>Failed to get weather, please try again</Header>
		</Segment>
	);
};

export default Search;
