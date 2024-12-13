
import React from 'react';

interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, description }) => {
  return (
    <section className="mb-4">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default TitleAndDescription;
