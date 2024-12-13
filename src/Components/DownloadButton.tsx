import React from 'react';

interface DownloadButtonProps {
  title: string; // Texto que aparecerá en el botón
  filePath: string; // Ruta del archivo que se descargará
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ title, filePath }) => {
  return (
    <a 
      href={filePath} 
      className="btn btn-primary mt-3" 
      download
    >
      {title}
    </a>
  );
};

export default DownloadButton;
