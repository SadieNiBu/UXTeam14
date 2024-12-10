import React, { lazy, Suspense, useEffect, useRef } from 'react'
import './Home.css'
import placeholder from './Images/placeholder.jpg'
import { Link, useMatch, useResolvedPath} from "react-router-dom"
import '@justinribeiro/lite-youtube';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeCompetitions = lazy(() => import('./HomeCompetitions'));
const HomeGallery = lazy(() => import('./HomeGallery'));

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const section1Ref = useRef(null);
  const sponsorsRef = useRef(null);
  const newsRef = useRef(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const logo1 = "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732326073/image_31_hdyipr.png";
  const pic1 = "https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1732604125/section1_d8znop.png";

  useEffect(() => {
    document.title = "C3 Team @ UCF";

    const fetchArticles = async () => {
      try {
        const response = await fetch('https://213633.xyz/api/articles');
        const data = await response.json();

        if (response.ok) {
          setArticles(data.slice(0, 3)); // Get the latest three articles
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    console.log(isSafari);

    if (!isSafari) {
      const headerAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current, // Trigger animation when hero comes into view
          start: 'top 75%',
        },
      });

      headerAnimation
        .fromTo(
          headerRef.current.querySelector('h3'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          headerRef.current.querySelector('p'),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
          '-=0.5' // Overlap the animations
        )
        .fromTo(
          headerRef.current.querySelector('.btn'),
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
          '-=0.5'
        );

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        section1Ref.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 90%',
          },
        }
      );

      gsap.fromTo(
        sponsorsRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sponsorsRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        newsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: newsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, [isSafari]);

  return (
    <div className='home-main'>
      <div className='hero' ref={heroRef}>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/c_scale,w_600/v1733283547/NCCDC__2024Winners_cropped-min_ulgot3.png"
          />
          <source
            media="(max-width: 1200px)"
            srcset="https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/c_scale,w_1200/v1733283547/NCCDC__2024Winners_cropped-min_ulgot3.png"
          />
          <img
            src="https://res.cloudinary.com/dpvt0b5wd/image/upload/f_auto/v1733283547/NCCDC__2024Winners_cropped-min_ulgot3.png"
            class="picture"
            alt="UCF C3 Team"
          />
        </picture>
        <div className='header' ref={headerRef}>
          <h3>Meet UCF's Collegiate Cybersecurity Competition Team</h3>
          <p>Where the best hackers go</p>
          <Link to='/about' className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
      <div className='section-1' ref={section1Ref}>
        <div className='wrapper'>
          <img src={pic1} class="picture" alt='UCF C3 Team' />
          <div className='text'>
            <div className='quote'>WE ARE ALWAYS UP</div>
            <h1>FOR A CHALLENGE</h1>
            <p>
              Our teams are always ready for whatever challenge comes their way. No obstacle is too big for us, as we analyze and problem solve our way through various challenges. 
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
              <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </div>
      </div>
      <div className='sponsors full-bleed' ref={sponsorsRef}>
        <h1>Our Sponsors</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="1" viewBox="0 0 1300 1" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L1300 0V1L0 1V0Z" fill="#212529"/>
        </svg>
        <div className='logos'>
          <img src={logo1} loading="lazy" class="logo" alt='Logo 1' />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeCompetitions />
      </Suspense>
      <div className='news__svg--black'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="36" viewBox="0 0 1500 36" fill="none">
            <path d="M0 2.30889e-05L454 24.2105L544 0L0 2.30889e-05Z" fill="black"/>
            <path d="M1292 24.2105L1500 0L1014 1.0678L544 0L664 36L796 14L1032 0L1292 24.2105Z" fill="black"/>
        </svg>
      </div>
      
      <div className='news' ref={newsRef}>
        <div className='news__header'>
          <div className='news__header__tagline'>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="3" viewBox="0 0 72 3" fill="none">
              <path d="M0 1.01758H72" stroke="#495057" stroke-width="2"/>
            </svg>
            <div className='news__header__tagline__text'>Recent News</div>
          </div>
          <div className='news__header__text'>Articles About Us</div>
        </div>
        <div className='news__articles'>
          {loading && <p>Loading articles...</p>}
          {!loading && articles.length === 0 && <p>No recent news available at the moment.</p>}
          {!loading && articles.map((article) => (
            <div className='news__article' key={article._id}>
              <div className='news__article__image'>
                <img src={article.image || placeholder} className="photo" loading="lazy" alt={article.title} />
              </div>
              <div className='news__article__title'>{article.title}</div>
              <div className='news__article__info'>
                <div className='news__article__info__author'>{article.author}</div>
              </div>
              <div className='news__article__info__date'>
                  {new Date(article.date).toLocaleDateString(undefined, { timeZone: 'UTC' })}
                </div>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className='news__article__button'>
                  <div className='news__article__button__text'>Read More</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M11.4429 10.0031L5.83921 4.61586C5.68491 4.46787 5.60003 4.27002 5.60003 4.05906C5.60003 3.84797 5.68491 3.65024 5.83921 3.50202L6.33023 3.03022C6.48429 2.88177 6.69022 2.80005 6.90967 2.80005C7.12913 2.80005 7.33482 2.88177 7.48899 3.03022L14.1611 9.44418C14.3159 9.59287 14.4006 9.79154 14.4 10.0027C14.4006 10.2149 14.316 10.4133 14.1611 10.5621L7.49521 16.9699C7.34103 17.1183 7.13534 17.2 6.91576 17.2C6.69631 17.2 6.49062 17.1183 6.33632 16.9699L5.84542 16.4981C5.52598 16.191 5.52598 15.6911 5.84542 15.3841L11.4429 10.0031Z" fill="#0A58CA" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeGallery />
      </Suspense>
      <div className='medium'>
        <div className='medium__text'>
          <h1>The Impact of C3 Membership</h1>
          <p>Learn all about what C3 can offer with an inside perspective from a C3 team member.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="6" viewBox="0 0 100 6" fill="none">
            <path d="M0 0.0175781H100V5.01758H0V0.0175781Z" fill="#FFC904"/>
          </svg>
        </div>
        <lite-youtube videoid="PLNluCohtZ4"></lite-youtube>  
      </div>
    </div>
  )
}

export default Home