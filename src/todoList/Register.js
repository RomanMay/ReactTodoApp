import React from 'react'

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			password: ''
		}
		this.register = this.register.bind(this)
	}
	register(e) {
		e.preventDefault()

	}
	render() {
		return (
			<form className="authForm">
				<div className="formGroup">
					<input
						className="formInput"
						tupe='email'
						placeholder='E-mail'
					/>
					<input
						className="formInput"
						tupe='text'
						placeholder='Username'
					/>
					<input
						className="formInput"
						tupe='password'
						placeholder='Password'
					/>
					<a
						href='/'
						className="formButton"
						type='submit'
						onClick={this.register}
					>
						Register
				</a>
				</div>

			</form>
		)
	}
}
export default Register