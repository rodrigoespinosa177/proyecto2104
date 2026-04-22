import { useState } from 'react';
import { people } from './data.js';

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
      <li key={person.id}>
        <p>
          <b>{person.name}</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
      </li>
    );

  return (
    <div>
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      {/* Botones de profesión */}
      <div>
        {profesiones.map(prof => (
          <button
            key={prof}
            onClick={() => setProfesionFiltro(prof)}
            style={{ fontWeight: profesionFiltro === prof ? 'bold' : 'normal' }}
          >
            {prof}
          </button>
        ))}
      </div>

      {/* Lista */}
      {listItems.length > 0
        ? <ul>{listItems}</ul>
        : <p>No se encontraron resultados</p>
      }
    </div>
  );
}