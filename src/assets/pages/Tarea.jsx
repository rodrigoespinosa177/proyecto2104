import { useState } from "react";
import "./Tarea.css";

function Tarea() {
  const [tareas, setTareas] = useState([
    { text: "Aprender React", completed: true },
    { text: "Hacer ejercicio", completed: false },
  ]);

  const toggleTarea = (index) => {
    const nuevasTareas = tareas.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t,
    );
    setTareas(nuevasTareas);
  };

  return (
    <div className="tarea-container">
      <h1>Lista de Tareas</h1>

      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        tareas.map((t, i) => (
          <div className="tarea" key={i}>
            <p
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            >
              {t.text}
            </p>

            {t.completed && <span className="completada">✔ Completada</span>}

            <button
              className={t.completed ? "btn-cancelar" : "btn-realizar"}
              onClick={() => toggleTarea(i)}
            >
              {t.completed ? "Cancelar tarea" : "Realizar tarea"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Tarea;
