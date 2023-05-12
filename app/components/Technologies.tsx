import React from 'react'
import Carousel from './Carousel';

const Technologies = () => {
    const rows = [
        [
          { src: "/images/tech1.png", alt: "Technology 1" },
          { src: "/images/tech2.png", alt: "Technology 2" },
          { src: "/images/tech3.png", alt: "Technology 3" },
        ],
        [
          { src: "/images/tech4.png", alt: "Technology 4" },
          { src: "/images/tech5.png", alt: "Technology 5" },
          { src: "/images/tech6.png", alt: "Technology 5" },
        ],
        [
          { src: "/images/tech7.png", alt: "Technology 6" },
          { src: "/images/tech8.png", alt: "Technology 7" },
          { src: "/images/tech9.png", alt: "Technology 8" },
        ],
        [
            { src: "/images/tech10.png", alt: "Technology 6" },
            { src: "/images/tech11.png", alt: "Technology 7" },
            { src: "/images/tech12.png", alt: "Technology 8" },
          ],
      ];
      
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen">
     {rows.map((images, index) => (
       <div
         key={index}
         className={`row-${index} absolute top-0 left-0 w-full flex justify-start`}
         style={{ animationDelay: `${index}s` }}
       >
         <Carousel images={images} />
       </div>
     ))}
   </div>
  )
}

export default Technologies;
