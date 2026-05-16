import { createContext, useState, useContext } from 'react';

//crea una caja donde van a estar los datos globales
const UserContext = createContext(null);

// El provider Todo lo que esté adentro de él puede acceder a los datos
export function UserProvider({ children }) {
    
    const [usuario, setUsuario] = useState(null);
   
    // login() recibe nombre y rol
    const login = (nombre, rol) => {
    setUsuario({ nombre, rol });
  };

  // logout() borra el usuario
    const logout = () => {
    setUsuario(null);
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUsuario() {
  return useContext(UserContext);
}