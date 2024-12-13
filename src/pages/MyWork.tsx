import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import '../Styles/mitrabajo.css'
import hotel1 from '../assets/imgpry1/hotel1.png';
import hotel2 from '../assets/imgpry1/hotel2.png';
import hotel3 from '../assets/imgpry1/hotel3.png';
import hotel4 from '../assets/imgpry1/hotel4.png';
import hotel5 from '../assets/imgpry1/hotel5.png';
import conversor1 from '../assets/imgpry2/conversor1.png';
import encriptador1 from '../assets/imgpry3/encriptador1.jpeg';
import encriptador2 from '../assets/imgpry3/encriptador2.jpeg';
import encriptador3 from '../assets/imgpry3/encriptador3.jpeg';



const MyWork: React.FC = () => {

    // Datos de los proyectos
  const projects = [
    // Datos del proyecto 1
    {
      title: 'Challenge ONE | Java | Back-end | Hotel Alura',
      description: 'Este Proyecto tiene el propósito de dar solución a Challenge Hotel Alura',
      images: [hotel1, hotel2, hotel3, hotel4,hotel5],
      buttons: [
        {
          color: 'btn btn-primary',
          title: 'Repositorio',
          onClick: () => window.open('https://github.com/Emmlg/Challenge-Oracle-ONE-Hotel-Alura', '_blank'),
        },],
    },
        // Datos del proyecto 2
    {
      title: 'Challenge ONE | Java | Back End | Conversor de Moneda',
      description: 'Este proyecto tiene como objetivo ser un convertidor universal, incluyendo la conversión de monedas y temperaturas.',
      images: [conversor1, conversor1, conversor1, conversor1],
      buttons: [
        {
          color: 'btn btn-primary',
          title: 'Repositorio',
          onClick: () => window.open('https://github.com/Emmlg/Challenge-Oracle-ONE-Conversor-Moneda', '_blank'),
        },],
    },
        // Datos del proyecto 3
    {
      title: 'Challenge ONE | Java | Back End | Encriptador',
      description: 'Este proyecto consiste en una aplicación web que utiliza tecnologías como HTML, CSS y JavaScript para encriptar y desencriptar textos.',
      images: [encriptador1, encriptador2, encriptador3, encriptador1],
      buttons: [
        {
          color: 'btn-secondary',
          title: 'Repositorio',
          onClick: () => window.open('https://github.com/Emmlg/Challenge-Oracle-ONE-Encriptador', '_blank'),
        },{
          color: 'btn btn-success',
          title: 'Ver Demo',
          onClick: () => window.open('https://emmlg.github.io/Challenge-Oracle-ONE-Encriptador/', '_blank'),
        },],
    }
  ];
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          images={project.images}
          buttons={project.buttons}
        />
      ))}
    </div>
  );
};

export default MyWork;
