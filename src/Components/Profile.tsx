import React from 'react';

interface ProfileProps {
  imageSrc: string; // Dirección de la imagen
  name: string; // Nombre de la persona
  profession: string; // Área profesional
  githubLink: string; // Enlace a GitHub
  linkedinLink: string; // Enlace a LinkedIn
}

const Profile: React.FC<ProfileProps> = ({ imageSrc, name, profession, githubLink, linkedinLink }) => {
  return (
    <aside className="col-md-4 text-center">
      <img
        src={imageSrc}
        alt={`Foto de ${name}`}
        className="img-fluid rounded-circle mb-3"
        style={{ width: '150px' }}
      />
      <h3>{name}</h3>
      <p>{profession}</p>
      <div className="d-flex justify-content-center">
        <a href={githubLink} className="text-dark me-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href={linkedinLink} className="text-dark" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </aside>
  );
};

export default Profile;
