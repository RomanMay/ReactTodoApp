import React from 'react'
import Clock from './Clock'

class CounterButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = { curentValue: props.defaultValue || 0 }
		this.clickCounter = this.clickCounter.bind(this)
	}

	clickCounter() {
		this.setState(state => ({
			curentValue: state.curentValue + 1
		}))
	}

	recButton() {

	}

	render() {
		return (
			<div>
				<button className="counter-button" onClick={this.clickCounter}>
					{this.state.curentValue}
				</button>
				{this.state.curentValue % 2 == 0 ? <Clock /> : ''}
			</div>

		)

	}
}
export default CounterButton
