import React from 'react'
import Calculator from './demos/Calculator'
import Clock from './demos/Clock'
import CounterButton from './demos/CounterButton'

import TimersContainer from './demos/TimersContainer'

class Demos extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div className="demo-container">
				<div className="demo">
					<TimersContainer />
				</div>
				<Clock />
				<CounterButton />
				<Calculator />
			</div>
		)
	}
}

export default Demos