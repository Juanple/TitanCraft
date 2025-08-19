import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function openLogin() {
    setIsLoginOpen(true);
  }

  function closeLogin() {
    setIsLoginOpen(false);
  }

  return (
    <LoginContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
