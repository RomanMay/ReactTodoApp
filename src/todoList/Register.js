import React from 'react'
import axios from 'axios'

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			email: '',
			password: ''
		}
		this.register = this.register.bind(this)
	}
	register() {
		// axios.post('localhost:3000/signUp',

		// 	{
		// 		userName: this.state.userName,
		// 		email: this.state.email,
		// 		password: this.state.password
		// 	},
		// 	{
		// 		headers: {
		// 			"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
		// 		}
		// 	}
		// )
		// 	.then(response => {
		// 		console.log('response:', response)
		// 	})
		// 	.catch(error => {
		// 		console.log('error:', error)

		// 	})

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