import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    {
      src: "/next.png",
      alt: "Image 1",
      text: "85%",
    },
    {
      src: "/HTML.jpeg",
      alt: "Image 2",
      text: "90%",
    },
    {
      src: "/react.jpeg",
      alt: "Image 3",
      text: "85%",
    },
    {
      src: "/type.jpeg",
      alt: "Image 4",
      text: "75%",
    },

    {
      src: "/wordpress.png",
      alt: "Image 5",
      text: "95%",
    },
  ];

  return (
    <div className="flex justify-center space-x-8  ">
      {images.map((image, index) => (
        <div key={index} className="relative  overflow-hidden aspect-ratio-1/1 group">
          <div>
            <Image
              src={image.src}
              alt={image.alt}
              width={120}
              height={120}
              className="overflow-hidden object-cover rounded-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 bg-white rounded-full">
            <p className="text-black">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
