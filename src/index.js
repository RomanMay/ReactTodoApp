import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoMain from './App'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(<TodoMain/>, document.getElementById('main'))

serviceWorker.unregister()
