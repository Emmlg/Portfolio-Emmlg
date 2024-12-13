import React from 'react';

interface ListWithTitleProps {
  title: string; // Texto para el encabezado
  list: string[]; // Array de elementos para la lista
}

const ListWithTitle: React.FC<ListWithTitleProps> = ({ title, list }) => {
  return (
    <div className="col-md-6 mb-4"> {/* Aquí se define como columna */}
      <h2>{title}</h2>
      <ul className="list-group">
        {list.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithTitle;
