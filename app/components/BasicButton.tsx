import React from 'react'
import { HandleAdd } from './TodoApp'

type Props = {
  title: string
  color: Color
  beforeIcon?: string
  handleAdd: HandleAdd
}

type Color = 'primary' | 'danger'

export const BasicButton: React.FC<Props> = (props) => {
  let colorClassName = ''

  if (props.color === 'primary') {
    colorClassName = 'bg-blue-500'
  } else if (props.color === 'danger') {
    colorClassName = 'bg-red-500'
  }

  return (
    <button
      type="submit"
      className={`py-5 px-8 rounded-xl text-white ${colorClassName}`}
    >
      <div className="flex">
        {props.beforeIcon && (
          <span className="material-icons">{props.beforeIcon}</span>
        )}
        {props.title}
      </div>
    </button>
  )
}

export default BasicButton
