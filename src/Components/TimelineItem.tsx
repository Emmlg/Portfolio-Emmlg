import React from 'react';

interface TimelineItemProps {
  title: string; // Título de la actividad (h4)
  timePeriod: string; // Período de tiempo
  description: string[]; // Descripción como lista de puntos
  technologies: string; // Tecnologías usadas
  icon?: string; // Icono opcional (por defecto un briefcase)
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  timePeriod,
  description,
  technologies,
  icon = "bi bi-briefcase", // Clase de icono por defecto
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <i className={icon}></i>
      </div>
      <div className="timeline-content">
        <h4 className="mb-1">{title}</h4>
        <h5>{timePeriod}</h5>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Tecnologías: {technologies}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
