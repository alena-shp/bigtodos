import React from 'react'
import BigList from './components/BigList'

function App() {
  let todos = [
    { id: 1, end: false, title: 'buy milk' },
    { id: 2, end: false, title: 'feed the cat' },
    { id: 3, end: false, title: 'to water flowers' },
    { id: 4, end: false, title: 'check mail' }
  ]

  let togglesTodo = id => {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.end = !todo.end
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1 className="header">List of important things</h1>
      <BigList todos={todos} onToggles={togglesTodo} />
    </div>
  )
}

export default App
