import { useState } from "react";
import "./Tarea.css";

function Tarea() {
  const [tareas, setTareas] = useState([
    // Por ejemplo, ahora nos muestra las tareas y su estado, si nosotros
    // borramos/comentamos las constantes, nos muestra el mensaje de NO hay tareas
    { text: "Aprender React", completed: true },
    { text: "Hacer ejercicio", completed: false },
  ]);

  // Esta función cambia el estado de la tarea (true o false)
  const toggleTarea = (index) => {
    const nuevasTareas = tareas.map((t, i) =>
      // map recorre el array viendo el contenido de las constantes
      // t es cada tarea e i su índice
      i === index
        ? { ...t, completed: !t.completed } // cambia el estado de la tarea
        : t,
    );

    setTareas(nuevasTareas);
  };

  return (
    <div className="tarea-container">
      <h1>Lista de Tareas</h1>

      {tareas.length === 0 ? (
        // Compara la longitud de la constante tareas, si es 0
        // nos muestra el mensaje de No hay tareas
        <p>No hay tareas</p>
      ) : (
        tareas.map((t, i) => (
          // Con key={i} identificamos el elemento
          <div className="tarea" key={i}>
            <p
              // Si la tarea está en true, se tacha el texto
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            >
              {t.text}
            </p>

            {/* && compara, es un if pero más corto, entonces
            si la tarea está en true, renderiza "Completada", sino no */}
            {t.completed && <span className="completada">✔ Completada</span>}

            {/* Botón que cambia el estado de la tarea */}
            <button
              className={t.completed ? "btn-cancelar" : "btn-realizar"}
              onClick={() => toggleTarea(i)}
            >
              {/* Si está en true cancelar tarea, sino realizar tarea */}
              {t.completed ? "Cancelar tarea" : "Realizar tarea"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Tarea;
