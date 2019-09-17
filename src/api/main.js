import React from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

export const getAllTasks = () => {
	return axios.get(`${url}/todos`)
		.then(response => {
			let res = response.data
			return res
		})
}