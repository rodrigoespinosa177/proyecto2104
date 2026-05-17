import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importamos el hook de traducción
import "./Tarea.css";

function Tarea() {
  const { t } = useTranslation(); // Inicializamos la función de traducción t

  const [tareas, setTareas] = useState([
    // Por ejemplo, ahora nos muestra las tareas y su estado, si nosotros
    // borramos/comentamos las constantes, nos muestra el mensaje de NO hay tareas
    // NOTA: Cambiamos los textos fijos por las claves correspondientes de los JSON
    { text: "learnReact", completed: true },
    { text: "doExercise", completed: false },
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
      {/* Traducimos el título principal usando la clave de tus JSON */}
      <h1>{t("tasks.title")}</h1>

      {tareas.length === 0 ? (
        // Compara la longitud de la constante tareas, si es 0
        // nos muestra el mensaje de No hay tareas
        <p>{t("tasks.noTasks")}</p>
      ) : (
        tareas.map((tItem, i) => ( // Renombrado t a tItem para evitar conflictos con la función t() de i18next
          // Con key={i} identificamos el elemento
          <div className="tarea" key={i}>
            <p
              // Si la tarea está en true, se tacha el texto
              style={{ textDecoration: tItem.completed ? "line-through" : "none" }}
            >
              {/* Traducimos dinámicamente el texto de la tarea usando su clave */}
              {t(`tasks.${tItem.text}`)}
            </p>

            {/* && compara, es un if pero más corto, entonces
            si la tarea está en true, renderiza "Completada", sino no */}
            {tItem.completed && <span className="completada">✔ {t("tasks.completed")}</span>}

            {/* Botón que cambia el estado de la tarea */}
            <button
              className={tItem.completed ? "btn-cancelar" : "btn-realizar"}
              onClick={() => toggleTarea(i)}
            >
              {/* Si está en true cancelar tarea, sino realizar tarea */}
              {tItem.completed ? t("tasks.cancel") : t("tasks.do")}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Tarea;