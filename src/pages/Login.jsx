import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsuario } from '../context/UserContext';
import './Login.css';

const USUARIOS_FAKE = [
  { usuario: 'admin',    contrasena: '1234', rol: 'administrador' },
  { usuario: 'rodrigo',  contrasena: '2106', rol: 'usuario' },
  { usuario: 'invitado', contrasena: '0000', rol: 'invitado' },
];

function Login() {
  const navigate = useNavigate();
  const { login } = useUsuario();

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const encontrado = USUARIOS_FAKE.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );

    if (encontrado) {
      login(encontrado.usuario, encontrado.rol);
      navigate('/');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2 className="login-titulo">Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="login-input"
        />

        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Entrar
        </button>

        <p className="login-hint">
          Usuarios de prueba: <b>admin/1234</b> · <b>rodrigo/abcd</b> · <b>invitado/0000</b>
        </p>

      </div>
    </div>
  );
}

export default Login;