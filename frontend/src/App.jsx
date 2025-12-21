import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Login from './pages/Login'
import Register from './pages/register'
import { CartProvider } from './component/Contextapi'
function App() {
  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginuser' element={<Login />} />
            <Route path='/createuser' element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>

    </>
  )
}

export default App