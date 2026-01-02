import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Login from './pages/Login'
import Register from './pages/register'
import { CartProvider } from './component/Contextapi'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Navbar from './component/Navbar'
import Aboutus from './pages/Aboutus'
import Foodonly from './component/Foodonly'
function App() {
  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginuser' element={<Login />} />
            <Route path='/createuser' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/about-us' element={<Aboutus />} />
            <Route path='/order/:orderId' element={<Foodonly />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>

    </>
  )
}

export default App