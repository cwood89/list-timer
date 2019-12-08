import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let duration
  let unit

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() && !duration.value) {
          return
        }
        const timeLimit = (time, type) => {
          switch (type) {
            case "minute":
              return time * 60
            case "hour":
              return time * 60 * 60
            default:
              return
          }
        }
        dispatch(addTodo(input.value, timeLimit(duration.value, unit.value)))
        input.value = '';
        duration.value = 0;
      }}>
        <label>
          Task:
          <input ref={node => input = node} />
        </label>
        <label>
          For:
          <input type="number" ref={node => duration = node} min="0" max="60" step="1" />
          <select ref={node => unit = node}>
            <option value="minute">minutes</option>
            <option value="hour">hours</option>
          </select>
        </label>
        <button type="submit">
          Add
        </button>
      </form>
    </div >
  )
}

export default connect()(AddTodo)