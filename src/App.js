import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register';
import TodosPage from './TodosPage';

function App() {

	return (
		<Router>
			<Switch>
       <Route path='/register' component={Register} />
        <Route path='/todos' component={TodosPage} />
				<Route path='/login' component={Login} />
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	)
}

export default App
