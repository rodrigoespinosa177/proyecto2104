# 📌 Proyecto React - Listas y Tareas

## 📖 Descripción

Este proyecto es una aplicación web desarrollada con React que permite navegar entre distintas vistas utilizando rutas.
Incluye funcionalidades como renderizado de listas de personas con filtros y una lista de tareas con manejo de estado y renderizado condicional.

---

## 🚀 Tecnologías utilizadas

* React
* Vite
* React Router DOM
* Material UI (MUI)
* JavaScript (ES6+)
* CSS

---

## 🧩 Funcionalidades

### 🏠 Home

* Pantalla principal con diseño tipo *hero*
* Introducción al proyecto

### 👥 Listas de personas

* Renderizado dinámico de datos desde un archivo (`data.js`)
* Búsqueda por nombre
* Filtro por profesión
* Mensaje cuando no hay resultados

### ✅ Lista de tareas

* Visualización de tareas
* Cambio de estado (completada / no completada)
* Renderizado condicional:

  * Si no hay tareas → muestra mensaje
  * Si hay tareas → muestra listado
* Estilo dinámico (tachado cuando está completada)

### 🧭 Navegación

* Navbar responsive con Material UI
* Navegación entre páginas sin recargar (SPA)
* Uso de `useNavigate` de React Router

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Lista.jsx
│   ├── Tarea.jsx
│   ├── data.js
│
├── App.jsx
├── main.jsx
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

* Componentes en React
* Hooks (`useState`)
* Renderizado condicional
* Manejo de listas (`map`, `filter`)
* Routing con React Router
* Separación de componentes
* Estilado con CSS y Material UI

---

## 👨‍💻 Autor

* Ruben Ledesma

---

## 📌 Notas

Este proyecto fue realizado con fines educativos para practicar conceptos fundamentales de React como el manejo del estado, navegación y renderizado dinámico.
