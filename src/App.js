import React from 'react'
import BigList from './components/BigList/BigList'
import Context from './Context/Context'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, end: false, title: 'buy milk' },
    { id: 2, end: false, title: 'feed the cat' },
    { id: 3, end: false, title: 'to water flowers' },
    { id: 4, end: false, title: 'check mail' }
  ])

  let togglesTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.end = !todo.end
        }
        return todo
      })
    )
  }

  let removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  let addTodo = title => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          end: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="header">List of important things</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <BigList todos={todos} onToggles={togglesTodo} />
        ) : (
          <p className="no-text">Nothing planned</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
