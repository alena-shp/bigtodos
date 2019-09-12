import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../../Context/Context'
import './TodoItem.scss'

const styles = {
  li: {
    background: '#f5dcee',
    color: '#060c38',
    fontFamily: '"Shadows Into Light", cursive',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.6rem 1.5rem',
    border: '1px solid #ccc',
    borderRadius: '15px',
    marginBottom: '.6rem',
    position: 'relative'
  },
  input: {
    marginRight: '1.5rem'
  }
}

const TodoItem = props => {
  const { removeTodo } = useContext(Context)

  const classes = []

  if (props.todo.end) {
    classes.push('done')
  }

  const checkboxId = `checkbox-${props.todo.id}`

  return (
    <li style={styles.li}>
      <span className={classes.join(' ') + ' checkbox'}>
        <input
          id={checkboxId}
          type="checkbox"
          checked={props.todo.end}
          style={styles.input}
          onChange={() => props.onChange(props.todo.id)}
        />
        <label className="label" htmlFor={checkboxId}>
          <strong>{props.num + 1 + ')'}</strong>
          &nbsp;
          {props.todo.title}
        </label>
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
