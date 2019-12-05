import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
class App extends Component {
  constructor() {
    super()
    this.inputElement = React.createRef()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }
  }


  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <TodoList
          inputElement={this.inputElement}
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} />
      </div>
    )
  }
}
export default App