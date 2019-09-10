import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}
const BigList = props => {
  return (
    <ul style={styles.ul}>
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
