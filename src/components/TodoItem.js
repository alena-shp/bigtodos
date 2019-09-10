import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context/Context'

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
  const { removeTodo } = useContext(Context)

  const classes = []

  if (props.todo.end) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={props.todo.end}
          style={styles.input}
          onChange={() => props.onChange(props.todo.id)}
        />
        <strong>{props.num + 1}</strong>
        &nbsp;
        {props.todo.title}
      </span>
      <button className="push" onClick={() => removeTodo(props.todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
