import './App.css'
import { Route, Routes } from 'react-router'
import Category from './Category'
import Tasks from './Tasks'

function App() {
  return (
    <>
        <div className="home">
          <Category/>
          <Tasks/>
        </div>
      </>
    )
}

export default App
