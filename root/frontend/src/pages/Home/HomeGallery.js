import './Home.css';
import React, { useEffect, useState } from 'react';

const HomeGallery = () => {
  const [photos, setPhotos] = useState(null);

  const staticPhotos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/1_kvxndb.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/2_kf2udv.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/3_r08jka.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325166/4_ljrwns.png",
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/photos');
      const json = await response.json();
      if (response.ok) {
        setPhotos(json);
      }
    };

    fetchPhotos();
  }, []);

  if (!photos) {
    return <h1>Loading images...</h1>;
  }

  const latestPhotos = photos
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, descending
    .slice(0, 4); // Take the latest 4 photos

  return (
    <div className='photos full-bleed--blue'>
      <div className='photos__header'>
        <p>Media</p>
        <h1>Photo Gallery</h1>
      </div>
      <div className='photos__main'>
        <div className='photos__main__row'>
          <img
            src={staticPhotos[0] || 'placeholder.jpg'}
            className="photo"
            alt={'Image 1'}
          />
          <img
            src={staticPhotos[1] || 'placeholder.jpg'}
            className="photo"
            alt={'Image 2'}
          />
        </div>
        <div className='photos__main__row'>
          <img
            src={staticPhotos[2] || 'placeholder.jpg'}
            className="photo"
            alt={'Image 3'}
          />
          <img
            src={staticPhotos[3] || 'placeholder.jpg'}
            className="photo"
            alt={'Image 4'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;