import React from 'react'
import { SetText } from './TodoApp'

type Props = {
  placeholder?: string
  text: string
  setText: SetText
}

export const BasicTextFields: React.FC<Props> = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="w-full h-16 pl-3 rounded-xl border border-gray-300 font-extralight focus:outline-none focus:border-gray-600"
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
  )
}

export default BasicTextFields
