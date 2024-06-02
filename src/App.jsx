import { Outlet } from 'react-router-dom'
import './App.css'
import Navitem from './components/Navitem'

function App() {
  return (
    <>
      <Navitem/>
       <Outlet/>
    </>
  )
}

export default App
