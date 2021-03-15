import BasicButton from './BasicButton'
import BasicTextField from './BasicTextField'
import { HandleAdd, SetText } from './TodoApp'

type Props = {
  handleAdd: HandleAdd
  text: string
  setText: SetText
}

const Form: React.FC<Props> = (props) => {
  return (
    <form onSubmit={(e) => props.handleAdd(e)}>
      <div className="flex">
        <div className="flex-grow sm:w-96 lg:w-screen">
          <BasicTextField
            placeholder="Add details"
            text={props.text}
            setText={props.setText}
          />
        </div>
        <div className="flex-grow-0 mx-2">
          <BasicButton
            title="Add"
            color="primary"
            handleAdd={props.handleAdd}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
