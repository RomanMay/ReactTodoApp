import React from 'react'
import Timer from './Timer'

class TimersList extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		const list = this.props.list.map((item, index) => {
			return <Timer showButton={this.props.showButton} key={index} >{item}</Timer>
		})
		return (
			<div>
				<ul>
					<li>{list}</li>
				</ul>
			</div>

		)
	}
}

export default TimersList