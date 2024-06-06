import { Outlet } from 'react-router-dom'
import './App.css'
import Navitem from './components/Navitem'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navitem />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
