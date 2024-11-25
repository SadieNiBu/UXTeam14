import './Home.css';
import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath} from "react-router-dom";

const HomeGallery = () => {
  const [photos, setPhotos] = useState(null);

  const staticPhotos = [
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/1_kvxndb.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/2_kf2udv.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325167/3_r08jka.png",
    "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732325166/4_ljrwns.png",
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

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
    <div className='photos full-bleed--blue hidden'>
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
      <button type="button" className="btn btn-primary">
        <CustomLink to="gallery">See More</CustomLink>
      </button>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

export default HomeGallery;