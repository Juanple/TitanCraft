import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoginProvider } from './context/LoginContext'
import LoginCard from './components/LoginCard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>

      <main className='font-lexend h-full w-full'>

        <Routes>
          <Route path='/' element={<App />} />
        </Routes>

        {/* Renderizamos el login globalmente */}
        <LoginCard />

      </main>

    </LoginProvider>
  </BrowserRouter>
)
