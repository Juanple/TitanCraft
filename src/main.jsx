import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoginProvider } from './context/LoginContext'
import LoginCard from './components/LoginCard.jsx'
import Crono from './pages/Crono.jsx'
import Header from './components/Header.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>
      <CartProvider>

        <main className='font-lexend h-full w-full bg-[var(--fondo)]'>
          <Header />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/crono' element={<Crono />}></Route>
          </Routes>

          {/* Renderizamos el login globalmente */}
          <LoginCard />
          <Cart />

        </main>
        
      </CartProvider>
    </LoginProvider>
  </BrowserRouter>
)
