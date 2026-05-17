import { useUsuario } from '../context/UserContext';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import './Carrito.css';

const PRODUCTOS = [
  { id: 1, nombre: 'Teclado mecánico', precio: 15000, emoji: '⌨️' },
  { id: 2, nombre: 'Mouse inalámbrico', precio: 8500,  emoji: '🖱️' },
  { id: 3, nombre: 'Monitor 24"',       precio: 75000, emoji: '🖥️' },
  { id: 4, nombre: 'Auriculares',       precio: 12000, emoji: '🎧' },
  { id: 5, nombre: 'Webcam HD',         precio: 18000, emoji: '📷' },
];

function Carrito() {
  const { usuario } = useUsuario();
  const { carrito, agregarProducto, quitarProducto, vaciarCarrito, total, cantidadTotal } = useCarrito();
  const navigate = useNavigate();

  // FUNCIÓN NUEVA
  const finalizarCompra = () => {
    alert('Compra realizada con éxito');
    vaciarCarrito();
  };

  // Si no hay usuario logueado mostramos este mensaje 
  if (!usuario) {
    return (
      <div className="carrito-no-auth">
        <p>🔒 Tenés que iniciar sesión para ver el carrito</p>
        <button
          className="carrito-btn-login"
          onClick={() => navigate('/login')}
        >
          Ir al Login
        </button>
      </div>
    );
  }

  return (
    <div className="carrito-container">

      <p className="carrito-bienvenida">
        Hola <b>{usuario.nombre}</b> — rol: {usuario.rol}
      </p>

      {/* ---- PRODUCTOS DISPONIBLES ---- */}
      <h2 className="carrito-titulo">Productos disponibles</h2>

      <div className="carrito-productos">
        {PRODUCTOS.map((producto) => (
          <div key={producto.id} className="carrito-producto-card">
            <p className="carrito-emoji">{producto.emoji}</p>
            <p className="carrito-nombre">{producto.nombre}</p>
            <p className="carrito-precio">${producto.precio.toLocaleString()}</p>
            <button
              className="carrito-btn-agregar"
              onClick={() => agregarProducto(producto)}
            >
              + Agregar
            </button>
          </div>
        ))}
      </div>

      {/* ---- CARRITO ---- */}
      <h2 className="carrito-titulo">Mi carrito ({cantidadTotal} ítems)</h2>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id} className="carrito-item">

              <span>{item.emoji} {item.nombre}</span>

              <span className="carrito-item-detalle">
                {item.cantidad} x ${item.precio.toLocaleString()} = <b>${(item.cantidad * item.precio).toLocaleString()}</b>
              </span>

              <div className="carrito-item-controles">
                <button className="carrito-btn-quitar" onClick={() => quitarProducto(item.id)}>−</button>
                <span>{item.cantidad}</span>
                <button className="carrito-btn-sumar" onClick={() => agregarProducto(item)}>+</button>
              </div>

            </div>
          ))}

          <div className="carrito-total">
            <p>Total: <b>${total.toLocaleString()}</b></p>

            <div>
              <button
                className="carrito-btn-vaciar"
                onClick={vaciarCarrito}
              >
                🗑️ Vaciar carrito
              </button>

              <button
                className="carrito-btn-comprar"
                onClick={finalizarCompra}
              >
                ✅ Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Carrito;