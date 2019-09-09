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
		// 	Auth.login(this.state.user, this.state.password)
		//   .catch(function(err) {
		//     console.log('Error logging in', err)
		//   });
	}
	render() {
		return (
			<form className="authForm">
				<div className="formGroup">
					<input
						className="formInput"
						tupe='email'
						// valueLink={this.linkState('user')}
						placeholder='E-mail'
					/>
					<input
						className="formInput"
						tupe='text'
						// valueLink={this.linkState('user')}
						placeholder='Username'
					/>
					<input
						className="formInput"
						tupe='password'
						// valueLink={this.linkState('password')}
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