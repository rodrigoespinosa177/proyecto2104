import { createContext, useState, useContext } from 'react';

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
    
    const [carrito, setCarrito] = useState([]);

    // AGREGAR un producto al carrito o suma la uno si ya existe
    const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };
// QUITA un producto: resta 1 a la cantidad
    const quitarProducto = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    );
  };

// VACIAR todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // TOTAL en pesos
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  // CANTIDAD de productos
  const cantidadTotal = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, quitarProducto, vaciarCarrito, total, cantidadTotal }}>
      {children}
    </CarritoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
  return useContext(CarritoContext);
}