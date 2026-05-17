import { createContext, useState, useContext } from 'react'


const ContadorContext = createContext() //creamos el contexto global


export function ContadorProvider({ children }) { //proveedor que envuelve toda la app y comparte el estado
  const [contador, setContador] = useState(0)

  const incrementar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador - 1)
  const resetear = () => setContador(0)

  return (
    <ContadorContext.Provider value={{ contador, incrementar, decrementar, resetear }}>
      {children}
    </ContadorContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContador() { //hook personalizado para usar el contador en cualquier componente
  return useContext(ContadorContext)
}
