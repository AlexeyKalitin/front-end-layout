import React from 'react'
import './styles.css'
import TodosPage from '../TodosPage'
import Login from './Login'
import Register from './Register'
import HomePage from './HomePage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme()

export default function App() {


	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/todos" component={TodosPage} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	)
}