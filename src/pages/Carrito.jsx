import { useUsuario } from '../context/UserContext';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Carrito.css';

const PRODUCTOS = [
  { id: 1, keyName: 'keyboard', precio: 15000, emoji: '⌨️' },
  { id: 2, keyName: 'mouse',    precio: 8500,  emoji: '🖱️' },
  { id: 3, keyName: 'monitor',  precio: 75000, emoji: '🖥️' },
  { id: 4, keyName: 'headphones',precio: 12000, emoji: '🎧' },
  { id: 5, keyName: 'webcam',    precio: 18000, emoji: '📷' },
];

function Carrito() {
  const { usuario } = useUsuario();
  const { carrito, agregarProducto, quitarProducto, vaciarCarrito, total, cantidadTotal } = useCarrito();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // FUNCIÓN NUEVA
  const finalizarCompra = () => {
    alert(t('cart.alertSuccess'));
    vaciarCarrito();
  };

  // Si no hay usuario logueado mostramos este mensaje 
  if (!usuario) {
    return (
      <div className="carrito-no-auth">
        <p>{t('cart.noAuth')}</p>
        <button
          className="carrito-btn-login"
          onClick={() => navigate('/login')}
        >
          {t('cart.goToLogin')}
        </button>
      </div>
    );
  }

  return (
    <div className="carrito-container">

      <p className="carrito-bienvenida">
        {t('cart.welcome', { nombre: usuario.nombre, rol: t(`auth.roles.${usuario.rol}`) })}
      </p>

      {/* ---- PRODUCTOS DISPONIBLES ---- */}
      <h2 className="carrito-titulo">{t('cart.availableProducts')}</h2>

      <div className="carrito-productos">
        {PRODUCTOS.map((producto) => (
          <div key={producto.id} className="carrito-producto-card">
            <p className="carrito-emoji">{producto.emoji}</p>
            <p className="carrito-nombre">{t(`cart.products.${producto.keyName}`)}</p>
            <p className="carrito-precio">${producto.precio.toLocaleString()}</p>
            <button
              className="carrito-btn-agregar"
              onClick={() => agregarProducto(producto)}
            >
              {t('cart.addBtn')}
            </button>
          </div>
        ))}
      </div>

      {/* ---- CARRITO ---- */}
      <h2 className="carrito-titulo">{t('cart.myCart', { cantidad: cantidadTotal })}</h2>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">{t('cart.emptyCart')}</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id} className="carrito-item">

              <span>{item.emoji} {t(`cart.products.${item.keyName}` || item.nombre)}</span>

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
            <p>{t('cart.total')} <b>${total.toLocaleString()}</b></p>

            <div>
              <button
                className="carrito-btn-vaciar"
                onClick={vaciarCarrito}
              >
                {t('cart.clearCart')}
              </button>

              <button
                className="carrito-btn-comprar"
                onClick={finalizarCompra}
              >
                {t('cart.checkout')}
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Carrito;