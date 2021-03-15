import { HandleCheck, HandleDelete, Task } from './TodoApp'

type Props = {
  todo: Task
  handleCheck: HandleCheck
  handleDelete: HandleDelete
  isDeleted: boolean
}

const Todo: React.FC<Props> = (props) => {
  return (
    <div className="my-1 h-8 leading-8 flex items-center">
      <label
        htmlFor={`checkbox__${props.todo.taskId}`}
        className="inline-block h-full align-middle flex-none"
      >
        <input
          type="checkbox"
          id={`checkbox__${props.todo.taskId}`}
          className="mx-3"
          checked={props.todo.isCompleted}
          onChange={() => props.handleCheck(props.todo)}
        />

        {props.todo.isCompleted ? (
          <s>{props.todo.taskName}</s>
        ) : (
          props.todo.taskName
        )}
      </label>
      <div className="flex-grow"></div>
      {props.isDeleted && (
        <span
          className="material-icons flex-none cursor-pointer"
          onClick={() => props.handleDelete([props.todo])}
        >
          delete_outline
        </span>
      )}
    </div>
  )
}

export default Todo
