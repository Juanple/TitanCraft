import { createContext, use, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  
  // Loading
  const [loading, setLoading] = useState(false)

  // Manejar la ventana del login
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function openLogin() {
    setIsLoginOpen(true);
  }

  function closeLogin() {
    setIsLoginOpen(false);
  }

  // Manejar la lógica del login
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [isLoged, setIsLoged] = useState(localStorage.length == 0 ? false : true);

  async function login(username, password) {
    setLoading(true);
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    })
    
    if(response.ok){
      const data = await response.json();

      setUsername(username);
      setIsLoged(true);
      localStorage.setItem('username', username);
      setLoading(false)
      return true;
    }
    setLoading(false);  
    return false;
  }

  function logout() {
    setIsLoged(false);
    setUsername(null);
    localStorage.removeItem('username');
  }

  // abrir y cerrar el componente de tickets
  const [isTicketOpen, setIsTicketOpen] = useState(false)

  return (
    <LoginContext.Provider value={{ isLoginOpen, openLogin, closeLogin, login, logout, username, isLoged, loading, setLoading, isTicketOpen, setIsTicketOpen }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
