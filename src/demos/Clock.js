import React from 'react'

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: Date.now() }
		this.updateIntervalMs = props.updateInterval ? props.updateInterval * 1000 : 1000

	}

	componentDidMount() {
		this.counterId = setInterval(
			() => this.setState(state => ({ date: state.date + this.updateIntervalMs })),
			this.updateIntervalMs
		)
	}

	componentWillUnmount() {
		clearInterval(this.counterId)
	}



	render() {
		return (
			<div >
				<h1 className="clock-color">Now {new Date(this.state.date).toLocaleTimeString()}</h1>
			</div>
		)
	}
}
export default Clock