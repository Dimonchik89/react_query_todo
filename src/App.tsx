import { useState } from 'react'

import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoButtons from './components/TodoButtons'

function App() {
  const [filterParam, setFilterParam] = useState<string>("all")

  const handleChangeFilter = (param: string) => {
    setFilterParam(param)
  }

  return (
    <>
      <TodoButtons changeFilter={handleChangeFilter}/>  
      <TodoForm/>
      <TodoList param={filterParam}/>
    </>
  )
}

export default App
