import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  
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

      return true;
    }
    return false;  
  }

  function logout() {
    setIsLoged(false);
    setUsername(null);
    localStorage.removeItem('username');
  }

  return (
    <LoginContext.Provider value={{ isLoginOpen, openLogin, closeLogin, login, logout, username, isLoged }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
