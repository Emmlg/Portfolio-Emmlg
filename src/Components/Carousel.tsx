import React from 'react';

interface CarouselProps {
  images: string[]; // Array de rutas de imágenes
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={image} className="d-block mx-auto" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
