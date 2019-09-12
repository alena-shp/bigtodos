import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem/TodoItem'
import './BigList.scss'

const BigList = props => {
  return (
    <ul className="list">
      {props.todos.map((e, i) => (
        <TodoItem key={e.id} todo={e} num={i} onChange={props.onToggles} />
      ))}
    </ul>
  )
}
BigList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggles: PropTypes.func.isRequired
}

export default BigList
