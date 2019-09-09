import React from 'react'

const scaleNames = {
	c: 'Цельсия',
	f: 'Фаренгейта'
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = { temperature: '' }
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value)
	}

	render() {
		const temperature = this.props.temperature
		const scale = this.props.scale
		
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}</legend>
				<input
					value={temperature}
					onChange={this.handleChange}>
				</input>

			</fieldset>
		)
	}
}

export default TemperatureInput