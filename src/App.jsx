import { Outlet } from 'react-router-dom'
import './App.css'
import Navitem from './components/Navitem'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navitem />
      <div className='min-vh-100'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
