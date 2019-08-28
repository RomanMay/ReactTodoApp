import React from 'react'

class AddTimerButton extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<button className="counter-button" onClick={ this.props.addTimer}>
					click
				</button>
			</div>
		)
	}
}
export default AddTimerButton