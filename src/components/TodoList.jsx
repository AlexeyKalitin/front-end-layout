import '../style-modules/TodoList.module.css'
import TodosElement from './TodoElement'
import { List } from 'antd'
import 'antd/dist/antd.css'

function TodoList({ todos, removeTodo, changeTodoCondition, changeTask }) {
	if (todos.length === 0) {
		return <h1 style={{ marginTop: '2vw' }}>Nothing...</h1>
	} else {
		return (
			<List
				itemLayout='vertical'
				size='default'
				dataSource={todos}
				renderItem={item => (
					<List.Item
						xl = "true"
						gutter= "true"
						bordered="false"
						key={item.title}
						actions={[
							<TodosElement
								key={item}
								todo={item}
								removeTodo={removeTodo}
								changeTodoCondition={changeTodoCondition}
								changeTask={changeTask}></TodosElement>,
						]}
					/>
				)}
			/>
		)
	}
}

export default TodoList
