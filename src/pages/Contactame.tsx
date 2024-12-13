import React from 'react';
import InputField from '../Components/InputField';
import TextAreaField from '../Components/TextAreaField';

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Mensaje enviado. Gracias por contactarme.');
  };

  return (
    <section id="contacto" className="container py-5">
      <h2 className="text-center mb-4">Contáctame</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <InputField 
              label="Nombre" 
              id="nombre" 
              type="text" 
              placeholder="Tu nombre" 
            />
            <InputField 
              label="Correo electrónico" 
              id="email" 
              type="email" 
              placeholder="Tu correo electrónico" 
            />
            <TextAreaField 
              label="Mensaje" 
              id="mensaje" 
              rows={4} 
              placeholder="Tu mensaje" 
            />
            <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
