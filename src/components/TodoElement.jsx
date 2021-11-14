import '../style-modules/TodoElement.module.css'
import { useState } from 'react'
import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

function TodoElement({ todo, removeTodo, changeTodoCondition, changeTask }) {
	const [isEditable, setIsEditable] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const handleKeyDown = e => {
		if (inputValue[0] !== ' ' && inputValue !== '' && inputValue.length > 2) {
			if (e.key === 'Enter') {
				changeTask(todo, inputValue)
				setIsEditable(false)
			}
			if (e.key === 'Escape') {
				setIsEditable(false)
			}
		}
	}

	const handleChange = e => {
		clearRusSymb(e.target.value)
	}

	const clearRusSymb = string => {
		setInputValue(string.replace(/[А-Яа-я]/g, ''))
	}

	const changingInput = (
		<input
			onBlur={() => {
				setIsEditable(false)
			}}
			autoFocus
			maxLength='25'
			defaultValue={todo.name}
			onKeyDown={handleKeyDown}
			onChange={handleChange}
			value={inputValue}
			className='todo-list__input'></input>
	)

	const currentDataWithoutSymb = todo => {
		try {
			return todo.updatedAt.replace(/[A-Z]|(\.\d{3})/g, ' ')
		} catch (e) {
			console.log(e.message)
		}
	}

	const makeInputEditable = () => {
		setIsEditable(true)
		setInputValue(todo.name)
	}

	return (
		<li key={todo.key}>
			<Checkbox style={{ boxShadow: '2px 2px 20px gray' }} onClick={() => changeTodoCondition(todo)} checked={todo.isDone} />
			<span onClick={makeInputEditable} className='todo-list__text'>
				{isEditable ? (
					changingInput
				) : (
					<div style={todo.isDone ? { color: 'black', textDecoration: 'line-through' } : { color: 'black' }}>{todo.name}</div>
				)}
			</span>
			<div className='todo-list__date'>{currentDataWithoutSymb(todo)}</div>
			<Button size='large' danger='true' onClick={() => removeTodo(todo)} icon={<DeleteOutlined />} />
		</li>
	)
}

export default TodoElement
