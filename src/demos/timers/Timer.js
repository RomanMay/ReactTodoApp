import React from 'react'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			time: 0,
			isOn: false,
			showButton: true
		}
		this.handlerTimer = this.handlerTimer.bind(this)
	}

	_startTimer() {
		return setInterval(() => this.setState(state => ({
			time: state.time + 1,
			isOn: state.isOn
		})), 1000)
	}

	handlerTimer() {
		this.setState(state => ({
			time: state.time,
			isOn: !state.isOn
		}))

		if (this.state.isOn) {
			clearInterval(this.timer)
		} else {
			this.timer = this._startTimer()
		}
	}

	render() {
		const button = <button className="counter-button" onClick={this.handlerTimer} >тЫк</button>
		return (
			<div>
				{this.props.showButton ? button : null}
				<h3 className="timer-color">timer: {this.state.time}</h3>

			</div>
		)
	}
}

export default Timer