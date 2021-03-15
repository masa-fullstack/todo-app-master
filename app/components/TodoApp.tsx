import { useState, useEffect, Dispatch, SetStateAction, FormEvent } from 'react'
import uuid from 'react-uuid'
import ActiveTab from './ActiveTab'
import AllTab from './AllTab'
import CenteredTabs from './CenteredTabs'
import CompletedTab from './CompletedTab'

export type Task = {
  taskId: number
  taskName: string
  isCompleted: boolean
  createdAt: string
}

export type HandleCheck = (todo: Task) => void
export type HandleDelete = (todos: Task[]) => void
export type HandleAdd = (e: FormEvent<HTMLFormElement>) => void
export type SetText = Dispatch<SetStateAction<string>>

const APP_KEY = 'todoAppMaster'

const initialAppState = [
  {
    taskId: uuid(),
    taskName: 'testです',
    isCompleted: false,
    createdAt: new Date().toISOString(),
  },
]

const TodoApp: React.FC = () => {
  const appState = localStorage.getItem(APP_KEY)

  const initialState: Task[] = appState ? JSON.parse(appState) : initialAppState
  const [todos, setTodos] = useState(initialState)
  const [text, setText] = useState('')

  const handleCheck: HandleCheck = (todo) => {
    const toggleTodo: Task = {
      ...todo,
      isCompleted: !todo.isCompleted,
    }
    setTodos((prevState) => [
      ...prevState.filter((element) => element.taskId !== toggleTodo.taskId),
      toggleTodo,
    ])
  }

  const handleDelete: HandleDelete = (todos) => {
    const deleteIdList = todos.map((todo) => todo.taskId)

    setTodos((prevState) => [
      ...prevState.filter((element) => !deleteIdList.includes(element.taskId)),
    ])
  }

  const handleAdd: HandleAdd = (e) => {
    e.preventDefault()
    if (text) {
      const addTodo: Task = {
        taskId: uuid(),
        taskName: text,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      }
      setTodos((prevState) => [...prevState, addTodo])
      setText('')
    }
  }

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="mx-auto sm:w-96 lg:w-full">
      <CenteredTabs labels={['All', 'Active', 'Completed']}>
        <AllTab
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          text={text}
          setText={setText}
        />
        <ActiveTab
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          text={text}
          setText={setText}
        />
        <CompletedTab
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          text={text}
          setText={setText}
        />
      </CenteredTabs>
    </div>
  )
}

export default TodoApp
