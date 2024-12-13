import React from "react";
import TimelineItem from '../Components/TimelineItem';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../Styles/experiencia.css'
const Timeline: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Mi Experiencia</h2>
      <div className="timeline">
        <TimelineItem
          title="Instructor de Programación Orientada a Objetos (POO)"
          timePeriod="Agosto 2024 - Presente"
          description={[
            "Impartí cursos de POO, desde fundamentos hasta conceptos avanzados.",
            "Diseñé materiales didácticos y ejercicios prácticos.",
            "Ofrecí soporte y asesoramiento a estudiantes en proyectos y resolución de problemas."
          ]}
          technologies="Java, POO"
          icon="bi bi-person"
        />
        <TimelineItem
          title="Desarrollador Backend en Sistema de Gestión Hotelera"
          timePeriod=""
          description={[
            "Diseño y desarrollo de un sistema para la gestión de clientes en un hotel.",
            "Implementación de la lógica de negocio y conexión con bases de datos."
          ]}
          technologies="Java, MySQL"
          icon="bi bi-server"
        />
        <TimelineItem
          title="Desarrollador de Sistema de Inventario (En Curso)"
          timePeriod=""
          description={[
            "Diseño y desarrollo de un sistema que incluye módulos de gestión de inventario, ventas,",
            "administración y cobros para pagos a crédito, entre otros."
          ]}
          technologies="Java, MySQL"
        />
        <TimelineItem
          title="Desarrollador de Conversor de Monedas"
          timePeriod=""
          description={[
            "Creación de un conversor universal para monedas y temperaturas, con una interfaz en Java."
          ]}
          technologies="Java, API Conversor de Monedas"
        />
      </div>
    </div>
  );
};

export default Timeline;
