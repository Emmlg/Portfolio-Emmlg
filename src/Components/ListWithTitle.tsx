
import React from 'react';

interface ListWithTitleProps {
  title: string; // Texto para el encabezado
  list: string[]; // Array de elementos para la lista
}

const ListWithTitle: React.FC<ListWithTitleProps> = ({ title, list }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <h2>{title}</h2>
        <ul className="list-group">
          {list.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListWithTitle;

