import React from 'react';
import Carousel from './Carousel';
import Button from './Button';

interface ProjectItemProps {
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  images: string[]; // Array de imágenes para el carrusel
  buttons: { color: string; title: string; onClick?: () => void }[]; // Datos de los botones
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, images, buttons }) => {
  return (
    <div className="row mb-4">
      {/* Carrusel */}
      <div className="col-md-6">
        <Carousel images={images} />
      </div>

      {/* Información del Proyecto */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex">
              {buttons.map((btn, index) => (
                <Button key={index} color={btn.color} title={btn.title} onClick={btn.onClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
