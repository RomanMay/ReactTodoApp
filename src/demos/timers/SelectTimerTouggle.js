import React from 'react'

class SelectTimerTouggle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'show'
		}
		this.stateChange = this.stateChange.bind(this)

	}
	stateChange(e) {
		this.setState({
			value: e.target.value
		})

	}


	render() {
		return (
			<form>
				<label>
					Select timer state
				</label>
				<select className="select" onChange={this.props.hideButton}>
					<option value="show">Show</option>
					<option value="hide">Hide</option>

				</select>
			</form >

		)
	}
}

export default SelectTimerTouggle