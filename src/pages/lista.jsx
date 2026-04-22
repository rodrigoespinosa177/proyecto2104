import { useState } from 'react';
import { people } from './data.js';
import './Lista.css';

export default function List() {
  const [busqueda, setBusqueda] = useState('');
  const [profesionFiltro, setProfesionFiltro] = useState('todas');

  const profesiones = ['todas', ...new Set(people.map(p => p.profession))];

  const listItems = people
    .filter(person => {
      const coincideBusqueda = person.name.toLowerCase().includes(busqueda.toLowerCase());
      const coincideProfesion = profesionFiltro === 'todas' || person.profession === profesionFiltro;
      return coincideBusqueda && coincideProfesion;
    })
    .map(person =>
      <li key={person.id} className="list-item">
        <p>
          <b>{person.name}</b>
          {' · ' + person.profession + ' · '}
          <span>conocido/a por {person.accomplishment}</span>
        </p>
      </li>
    );

  return (
    <div className="list-container">

      <input
        type="text"
        placeholder="🔍 Buscar por nombre..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="list-buscador"
      />

      <div className="list-botones">
        {profesiones.map(prof => (
          <button
            key={prof}
            onClick={() => setProfesionFiltro(prof)}
            className={`list-boton ${profesionFiltro === prof ? 'activo' : ''}`}
          >
            {prof}
          </button>
        ))}
      </div>

      {listItems.length > 0
        ? <ul className="list-ul">{listItems}</ul>
        : <p className="list-vacio">No se encontraron resultados</p>
      }
    </div>
  );
}