import React, { useState } from 'react'
import './AddTodo.scss'

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form className="form-wrapper" onSubmit={onSubmitHandler}>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        className="input-text"
        placeholder="I must do..."
      />
      <button type="submit" className="button-push">
        Add todo
      </button>
    </form>
  )
}

export default AddTodo
