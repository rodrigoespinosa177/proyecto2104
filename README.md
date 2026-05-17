# 📌 Proyecto React

## 📖 Descripción
Este proyecto es una aplicación web desarrollada con React que permite navegar entre distintas vistas utilizando rutas. Incluye funcionalidades como renderizado de listas de personas con filtros, una lista de tareas con manejo de estado, sistema de login con roles, carrito de compras y soporte multiidioma.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Material UI (MUI)
- react-i18next (internacionalización)
- JavaScript (ES6+)
- CSS

---

## 🧩 Funcionalidades

### 🏠 Home
- Pantalla principal con diseño tipo hero
- Introducción al proyecto

### 👥 Listas de personas
- Renderizado dinámico de datos desde un archivo (`data.js`)
- Búsqueda por nombre
- Filtro por profesión
- Mensaje cuando no hay resultados

### ✅ Lista de tareas
- Visualización de tareas
- Cambio de estado (completada / no completada)
- Renderizado condicional:
  - Si no hay tareas → muestra mensaje
  - Si hay tareas → muestra listado
- Estilo dinámico (tachado cuando está completada)

### 🔐 Login
- Sistema de autenticación con usuarios y roles
- Usuarios disponibles:

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| admin | 1234 | Administrador |
| rodrigo | 2106 | Usuario |
| invitado | 0000 | Invitado |

### 🛒 Carrito de compras
- Solo accesible para usuarios logueados
- Agregar y quitar productos
- Contador de cantidad y total
- Vaciar carrito y finalizar compra

### 🌐 Multiidioma (ES / EN)
- Cambio de idioma desde el navbar
- Traducciones en español e inglés para todas las vistas

### 🧭 Navegación
- Navbar responsive con Material UI
- Navegación entre páginas sin recargar (SPA)
- Uso de `useNavigate` de React Router

### 🌙 Tema claro/oscuro
- Alternancia entre modo claro y modo oscuro desde el navbar

### 🔢 Contador global
- Contador compartido entre componentes usando Context API
- Controles de incrementar, decrementar y resetear desde el navbar

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ThemeToggle.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Lista.jsx
│   ├── Tarea.jsx
│   ├── Login.jsx
│   ├── Carrito.jsx
│   └── data.js
│
├── context/
│   ├── ContadorContext.jsx
│   ├── CarritoContext.jsx
│   ├── ThemeContext.jsx
│   └── UserContext.jsx
│
├── i18n/
│   ├── index.js
│   ├── es.json
│   └── en.json
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
```
git clone <URL_DEL_REPO>
```

2. Instalar dependencias:
```
npm install
```

3. Ejecutar el proyecto:
```
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

---

## 🧠 Conceptos aplicados

- Componentes en React
- Hooks (`useState`, `useContext`)
- Renderizado condicional
- Manejo de listas (`map`, `filter`)
- Routing con React Router
- Separación de componentes
- Estilado con CSS y Material UI
- Context API y estado global
- Internacionalización con react-i18next
- Prop Drilling y cómo evitarlo

---

## 🧠 Conceptos teóricos - Context API

### ¿Qué es useContext?
Es un Hook de React que permite leer y suscribirse a un contexto desde cualquier componente. El contexto permite que cierta información del componente padre esté disponible en cualquier componente del árbol que esté por debajo de él, sin importar qué tan profundo sea y sin pasar la información explícitamente por medio de props.

### Problemas que resuelve
- **Gestión de dependencias:** cualquier componente puede conectarse al proveedor de contexto y extraer lo que necesite.
- **Gestión de estado global:** al combinarse con useState o useReducer, permite crear soluciones de estado global sin instalar dependencias externas.
- **Evitar el prop drilling:** elimina la necesidad de pasar datos manualmente a través de múltiples componentes intermedios que no los utilizan.

### ¿Qué es el Prop Drilling?
Es cuando pasás datos (props) desde un componente padre hacia componentes muy profundos, atravesando varios componentes intermedios que en realidad no necesitan esos datos. Context API resuelve este problema.

### ¿Cómo se usa el proveedor de contexto?
Se envuelven los componentes en un proveedor de contexto para especificar el valor del contexto para todos los componentes dentro de él:

```jsx
<ContadorProvider>
  <Navbar />
  <App />
</ContadorProvider>
```

### Casos de uso de Context
- Pasar datos de manera profunda en el árbol
- Actualizar los datos pasados a través del contexto
- Especificar un valor por defecto
- Sobreescribir el contexto para una parte del árbol
- Optimizar rerenderizados al pasar objetos y funciones

### Rerenderizado
Cuando cambia el estado global, React rerenderiza todos los componentes suscritos al contexto para mantener la interfaz de usuario sincronizada con los datos de la aplicación.

### Props vs useContext
| Props | useContext |
|-------|-----------|
| Pasa datos de padre a hijo | Pasa datos de forma global |
| Solo disponible para el componente hijo directo | Disponible para cualquier componente del árbol |
| Requiere pasar datos por cada nivel | No requiere pasar datos por niveles intermedios |

---

## 👨‍💻 Autores

- Ruben Ledesma
- Rodrigo Espinosa
- Santiago Romano

---

## 📌 Notas
Este proyecto fue realizado con fines educativos para practicar conceptos fundamentales de React como el manejo del estado, navegación, renderizado dinámico, estado global con Context API e internacionalización.
