import React from 'react';

interface ButtonProps {
  color: string; // Clase de color del botón (e.g., 'btn-primary')
  title: string; // Texto del botón
  onClick?: () => void; // Acción opcional al hacer clic
}

const Button: React.FC<ButtonProps> = ({ color, title, onClick }) => {
  return (
    <button 
      className={`btn ${color} me-2`} 
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
