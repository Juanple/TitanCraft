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
import { BuyProvider } from './context/BuyContext.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Loading from './components/Loading.jsx'
import TicketCard from './components/TicketCard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>
      <CartProvider>
        <BuyProvider>

          <main className='font-lexend h-full w-full bg-[var(--fondo)]'>
            <Header />
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/crono' element={<Crono />}></Route>
              <Route path='/nosotros' element={<Nosotros />} />
            </Routes>

            {/* Renderizamos componentes flotantes globalmente */}
            <LoginCard />
            <Cart />
            <Loading />
            <TicketCard />

          </main>

        </BuyProvider>
      </CartProvider>
    </LoginProvider>
  </BrowserRouter>
)
