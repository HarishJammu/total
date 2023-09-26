import React from 'react';
import './ImageGallery.css'; // Import the CSS file


const ImageGallery = () => {

  
  const images = [
    {
      title: 'Chains',
      url: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw022289d6/images/hi-res/51D2P1CBOAAP1_1.jpg?sw=360&sh=360', // Replace with actual image URL
    },
    {
      title: 'Rings',
      url: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw113e5f6c/homepage/NewForYou/sparkling-avenues.jpg', // Replace with actual image URL
    },
    {
      title: 'Ear Rings',
      url: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbbc61d4f/images/hi-res/50D2FFSQGAGA02.jpg?sw=360&sh=360', // Replace with actual image URL
    },
    {
      title: 'Bangles',
      url: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31dca96c/images/hi-res/511193VKR1A00.jpg?sw=360&sh=360', // Replace with actual image URL
    },
    {
      title: 'Pendants',
      url: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6fd33085/images/hi-res/50D2FFPRGAAA02.jpg?sw=360&sh=360', // Replace with actual image URL
    },
  ];


  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div className="image-card" key={index}>
          <img className="image" alt={image.title} src={image.url} />
          <h4 className="image-title">{image.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
