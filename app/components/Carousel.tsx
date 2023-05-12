import React from 'react'

interface CarouselProps {
    images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
  return (
    <div className="carousel relative">
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="mx-auto w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        />
      ))}
    </div>
  )
}

export default Carousel;
