import React from 'react'
import TimersList from './timers/TimersList'
import AddTimerButton from './timers/AddTimerButton'
import SelectTimerTouggle from './timers/SelectTimerTouggle'

class TimersContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			itemsArray: [],
			showButton: true
		}
		this.addTimer = this.addTimer.bind(this)
		this.hideButton = this.hideButton.bind(this)
	}

	addTimer() {
		this.setState(state => ({
			itemsArray: [...state.itemsArray, ''],
			showButton: state.showButton
		}))
	}
	hideButton() {
		this.setState(state => ({
			itemsArray: state.itemsArray,
			showButton: !state.showButton
		}))
	}

	render() {
		return (
			<div>
				<SelectTimerTouggle hideButton={this.hideButton} />
				<AddTimerButton addTimer={this.addTimer} />
				<TimersList showButton={this.state.showButton} list={this.state.itemsArray} />
			</div>
		)
	}
}
export default TimersContainer