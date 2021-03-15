import BasicButton from './BasicButton'
import List from './List'
import { HandleCheck, HandleAdd, Task, SetText, HandleDelete } from './TodoApp'

type Props = {
  todos: Task[]
  handleCheck: HandleCheck
  handleDelete: HandleDelete
  handleAdd: HandleAdd
  text: string
  setText: SetText
}

const CompletedTab: React.FC<Props> = (props) => {
  const completedTodos = props.todos.filter((todo) => todo.isCompleted)

  return (
    <div className="w-full mt-8">
      <List
        todos={completedTodos}
        handleCheck={props.handleCheck}
        handleDelete={props.handleDelete}
        isDeleted={true}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleDelete(completedTodos)
        }}
      >
        <div className="flex justify-end">
          <BasicButton
            title="delete all"
            color="danger"
            beforeIcon="delete_outline"
            handleAdd={props.handleAdd}
          />
        </div>
      </form>
    </div>
  )
}

export default CompletedTab
