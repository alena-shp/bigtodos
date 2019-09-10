import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  li: {
    background: '#d9e2ff',
    color: '#060c38',
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

const TodoItem = props => {
  return (
    <li style={styles.li}>
      <span>
        <input
          type="checkbox"
          style={styles.input}
          onChange={() => props.onChange(props.todo.id)}
        />
        <strong>{props.num + 1}</strong>
        &nbsp;
        {props.todo.title}
      </span>
      <button className="push">&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
