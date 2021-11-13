import './style-modules/style.css'
import React, { useState, useEffect } from 'react'
import MyInput from './components/Input'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
const axios = require('axios').default
axios.defaults.baseURL = process.env['REACT_APP_SERVER_URL']
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')

function App() {
	const [isLoaded, setIsLoaded] = useState(false)
	const [APIResponseError, setAPIResponseError] = useState(false)
	const [todos, setTodos] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [todosPerPage] = useState(5)

	useEffect(() => {
		getItemsAPI('', 'asc')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		showAlertAboutError(APIResponseError)
		setTimeout(() => setAPIResponseError(false), 5000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [APIResponseError])

	useEffect(() => {
		if (Math.ceil(todos.length / todosPerPage) < currentPage && currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
    console.log(todos)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todos.length])

	const queryString = (First, Second) => new URLSearchParams({ filterBy: First, order: Second }).toString()

	const getItemsAPI = async (filterBy, sortStatus) => {
		try {
			setIsLoaded(true)
			const response = await axios.get(`/todos?${queryString(filterBy, sortStatus)}`)
			setTodos(response.data)
			setIsLoaded(false)
		} catch (e) {
			setAPIResponseError(e.message)
		}
	}

	const patchItemAPI = async elem => {
		try {
			setIsLoaded(true)
			await axios.put(`/todo/${elem.uuid}`, elem)
			setIsLoaded(false)
		} catch (e) {
			setAPIResponseError(e.message)
		}
	}

	const removeItemAPI = async elem => {
		try {
			setIsLoaded(true)
			await axios.delete(`/todo/${elem.uuid}`)
			setIsLoaded(false)
		} catch (e) {
			setAPIResponseError(e.message)
		}
	}

	const setItemAPI = async item => {
		try {
			setIsLoaded(true)
			const newElem = await axios.post(`/todo`, item)
			setIsLoaded(false)
      return newElem
		} catch (e) {
			setAPIResponseError(e.message)
		}
	}

	const showAlertAboutError = () => {
		setAPIResponseError(APIResponseError)
	}

	const handlerRemoveTodo = elem => {
		removeItemAPI(elem)
		setTodos(todos.filter(x => x !== elem))
	}

	const replaceElementField = (elem, field, value) => {
		if (field === 'done') {
			elem.isDone = value
		}
		if (field === 'name') {
			elem.name = value
		}
	}

	const handlerChangeTodoCondition = elem => {
		replaceElementField(elem, 'done', !elem.isDone)
		todos[todos.indexOf(elem)] = elem
		setTodos(todos.slice(0))
		patchItemAPI(elem)
	}

	const handlerChangeTask = (elem, newText) => {
		replaceElementField(elem, 'name', newText.slice(0))
		todos[todos.indexOf(elem)] = elem
		setTodos(todos.slice(0))
		patchItemAPI(elem)
	}

	const handlerNewElemSetter = newElem => {
		setTodos([...todos, setItemAPI(newElem)])
	}

	const handlerSetSortStatus = (sortStatus, filterBy) => {
		getItemsAPI(sortStatus, filterBy)
		setCurrentPage(1)
	}

	const IsUniqueName = value => {
		return todos.every(x => x.name !== value)
	}

	const showErrorWindow = APIResponseError !== false && (
		<div className='alert-about-error'>
			<p>{APIResponseError}</p>
		</div>
	)

	const animatedLoader = (
		<div className='animated-loader'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
	const changeCurrentPage = (page, pageSize) => {
		setCurrentPage(page)
	}
	return (
		<div className='conteiner'>
			{showErrorWindow}
			<div>
				<div className='todo'>
					<h1>ToDo</h1>
					<MyInput newElemSetter={newElem => handlerNewElemSetter(newElem)} nonExistYet={value => IsUniqueName(value)} />
				</div>

				<Filter setSortStatus={(sortStatus, filterBy) => handlerSetSortStatus(sortStatus, filterBy)} />
			</div>
			<div className='items-list'>
				{!isLoaded ? (
					<TodoList
						todos={todos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage)}
						removeTodo={uuid => handlerRemoveTodo(uuid)}
						changeTodoCondition={elem => handlerChangeTodoCondition(elem)}
						changeTask={(elem, newText) => handlerChangeTask(elem, newText)}></TodoList>
				) : (
					animatedLoader
				)}
				<Pagination
					size='large'
					className='ant-pagination paginate'
					current={currentPage}
					total={todos.length}
					hideOnSinglePage
					pageSize={todosPerPage}
					onChange={(page, pageSize) => changeCurrentPage(page, pageSize)}
				/>
			</div>
		</div>
	)
}

export default App
