import './Home.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeGallery = () => {
  const [photos, setPhotos] = useState(null);
  const imageRefs = useRef([]);

  const staticPhotos = [
    'https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732325167/1_kvxndb.png',
    'https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732325167/2_kf2udv.png',
    'https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732325167/3_r08jka.png',
    'https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732325166/4_ljrwns.png',
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://213633.xyz/api/photos');
      const json = await response.json();
      if (response.ok) {
        setPhotos(json);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (imageRefs.current.length > 0) {
      // Animate images with GSAP
      gsap.fromTo(
        imageRefs.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRefs.current[0],
            start: 'top 85%',
          },
        }
      );
    }
  }, [photos]);

  if (!photos) {
    return <h1>Loading images...</h1>;
  }

  const latestPhotos = photos
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, descending
    .slice(0, 4); // Take the latest 4 photos

  return (
    <div className="photos full-bleed--blue">
      <div className="photos__header">
        <p>Media</p>
        <h1>Photo Gallery</h1>
      </div>
      <div className="photos__main">
        <div className="photos__main__row">
          <img
            src={staticPhotos[0] || 'placeholder.jpg'}
            className="photo"
            loading="lazy"
            alt={'Image 1'}
            ref={(el) => (imageRefs.current[0] = el)} // Assign ref to the image
          />
          <img
            src={staticPhotos[1] || 'placeholder.jpg'}
            className="photo"
            loading="lazy"
            alt={'Image 2'}
            ref={(el) => (imageRefs.current[1] = el)}
          />
        </div>
        <div className="photos__main__row">
          <img
            src={staticPhotos[2] || 'placeholder.jpg'}
            className="photo"
            loading="lazy"
            alt={'Image 3'}
            ref={(el) => (imageRefs.current[2] = el)}
          />
          <img
            src={staticPhotos[3] || 'placeholder.jpg'}
            className="photo"
            loading="lazy"
            alt={'Image 4'}
            ref={(el) => (imageRefs.current[3] = el)}
          />
        </div>
      </div>
      <Link to='gallery' className="btn btn-primary">
        See More
      </Link>
    </div>
  );
};

export default HomeGallery;