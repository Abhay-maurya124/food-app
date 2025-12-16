import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Login from './pages/Login'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App