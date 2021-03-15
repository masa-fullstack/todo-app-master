import Form from './Form'
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

const AllTab: React.FC<Props> = (props) => {
  return (
    <div className="w-full mt-8">
      <Form
        handleAdd={props.handleAdd}
        text={props.text}
        setText={props.setText}
      />
      <List
        todos={props.todos}
        handleCheck={props.handleCheck}
        handleDelete={props.handleDelete}
        isDeleted={false}
      />
    </div>
  )
}

export default AllTab
