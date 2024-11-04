import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {
    id: 1,
    title: "Read materials",
    done: "Yes"
  },
  {
    id: 2,
    title: "Watch videos",
    done: "Yes"
  },
  {
    id: 3,
    title: "Coding assignment",
    done: "No"
  },
  {
    id: 4,
    title: "Mentor session",
    done: "Yes"
  }
]

function App() {

  return (
    <div>
      <h1>Todo List</h1>

    <ul>
      {todoList.map(function(item) {
        return <li key={item.id}>{item.title}</li>
        }
      )}
    </ul>
    </div>
  )
}

export default App
