import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Timer from './Timer';
const App = () => (
  <>
    <Timer />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
)

export default App