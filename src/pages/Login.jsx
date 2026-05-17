import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsuario } from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import './Login.css';

const USUARIOS_FAKE = [
  { usuario: 'admin',    contrasena: '1234', rol: 'administrador' },
  { usuario: 'rodrigo',  contrasena: '2106', rol: 'usuario' },
  { usuario: 'invitado', contrasena: '0000', rol: 'invitado' },
];

function Login() {
  const navigate = useNavigate();
  const { login } = useUsuario();
  const { t } = useTranslation();

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
      setError(t('auth.errorMsg'));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2 className="login-titulo">{t('auth.login')}</h2>

        <input
          type="text"
          placeholder={t('auth.userPlaceholder')}
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder={t('auth.contrasena')}
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="login-input"
        />

        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          {t('auth.entrar')}
        </button>

        <p className="login-hint">
          {t('auth.hint')} <b>admin/1234</b> · <b>rodrigo/2106</b> · <b>invitado/0000</b>
        </p>

      </div>
    </div>
  );
}

export default Login;