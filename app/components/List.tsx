import Todo from './Todo'
import { HandleCheck, HandleDelete, Task } from './TodoApp'

type Props = {
  todos: Task[]
  handleCheck: HandleCheck
  handleDelete: HandleDelete
  isDeleted: boolean
}

const List: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todos
        .sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
        .map((todo) => (
          <Todo
            key={todo.taskId}
            todo={todo}
            handleCheck={props.handleCheck}
            handleDelete={props.handleDelete}
            isDeleted={props.isDeleted}
          />
        ))}
    </div>
  )
}

export default List
