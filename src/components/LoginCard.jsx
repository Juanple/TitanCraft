import { useEffect, useState } from "react";
import { useLogin } from "../context/LoginContext";

export default function LoginCard() {
  const { isLoginOpen, closeLogin } = useLogin();
  const [message, setMessage] = useState('');

  async function login(e) {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;
    e.target.reset();

    const response = await fetch('http://127.0.0.1:5000/login',{
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user, password })
    });
    const data = await response.json();
    setMessage(data.message);
  }

  useEffect(() => {
    if (isLoginOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoginOpen]);

  if (!isLoginOpen) return null;

  return (
    <div className="bg-black/80 z-20 h-screen w-full absolute top-0 left-0 flex justify-center items-center text-[var(--text2)]">
      <div className="bg-[var(--fondo3)] w-200 flex flex-col">
        <div className="bg-[var(--fondo4)] flex justify-center items-end h-30 relative p-2">
          <p className="text-[var(--text3)]/40 font-bold">
            Los datos introducidos han de ser los mismos del registro en el servidor de minecraft
          </p>
          <button onClick={closeLogin}>
            <i className="fa-solid fa-xmark absolute top-0 right-0 m-2 text-xl cursor-pointer"></i>
          </button>
          <img src="../../public/logo.png" className="w-[30rem] absolute mb-10" />
        </div>
        <form onSubmit={login} className="flex flex-col gap-4 text-md font-bold p-10">
          <p>{message}</p>
          <input required type="text" name="user" placeholder="Nombre de usuario"
            className="bg-[var(--fondo4)] p-5 border-b-2 border-white/20" />
          <input required type="password" name="password" placeholder="Contraseña"
            className="bg-[var(--fondo4)] p-5 border-b-2 border-white/20" />
          <button type="submit"
            className="bg-[var(--text1)] text-[var(--fondo3)] font-extrabold p-5 cursor-pointer hover:bg-[var(--text1)]/80">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
