import React from 'react';

import Image from 'next/image';

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
      { src: "/images/tech6.png", alt: "Technology 6" },
    ],
    [
      { src: "/images/tech7.png", alt: "Technology 7" },
      { src: "/images/tech8.png", alt: "Technology 8" },
      { src: "/images/tech9.png", alt: "Technology 9" },
    ],
    [
      { src: "/images/tech10.png", alt: "Technology 10" },
      { src: "/images/tech11.png", alt: "Technology 11" },
      { src: "/images/tech12.png", alt: "Technology 12" },
    ],
  ];

  return (
    <div className="flex flex-row gap-3">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col object-cover w-full h-full">
          {row.map((image, imageIndex) => (
            <Image key={imageIndex} src={image.src} alt={image.alt} width={100} height={100} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Technologies;
