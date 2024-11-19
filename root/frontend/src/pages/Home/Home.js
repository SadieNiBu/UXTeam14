import React, { useEffect } from 'react'
import './Home.css'
import hero from './Images/hero.jfif'
import pic1 from './Images/section1.png'
import logo1 from './Images/Logo1.svg'
import logo2 from './Images/Logo2.svg'
import logo3 from './Images/Logo3.svg'
import logo4 from './Images/Logo4.svg'
import logo5 from './Images/Logo5.svg'
import logo6 from './Images/Logo6.svg'
import placeholder from './Images/placeholder.jpg'
import { Link, useMatch, useResolvedPath} from "react-router-dom"

const Home = () => {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    document.title = "C3 Team @ UCF";

    const fetchArticles = async () => {
      try {
        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/articles');
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
  }, []);

  return (
    <div>
      <div className='hero'>
        <img src={hero} class="picture" alt='UCF C3 Team' />
        <div className='header'>
          <h3>Meet UCF's Collegiate Cyber Defense Team</h3>
          <p>Where the best hackers go</p>
          <button type="button" class="btn btn-primary"><CustomLink to='/about'>See More</CustomLink></button>
        </div>
      </div>
      <div className='section-1'>
        <div className='wrapper'>
          <img src={pic1} class="picture" alt='UCF C3 Team' />
          <div className='text'>
            <div className='quote'>WE ARE ALWAYS UP</div>
            <h1>FOR A CHALLENGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
              ut commodo diam libero vitae erat. Aenean faucibus nibh et justo 
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
              <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
            </svg>
          </div>
        </div>
      </div>
      <div className='sponsors full-bleed'>
        <h1>Our Sponsors</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="1" viewBox="0 0 1300 1" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L1300 0V1L0 1V0Z" fill="#212529"/>
        </svg>
        <div className='logos'>
          <img src={logo1} class="logo" alt='Logo 1' />
          <img src={logo2} class="logo" alt='Logo 2' />
          <img src={logo3} class="logo" alt='Logo 3' />
          <img src={logo4} class="logo" alt='Logo 4' />
          <img src={logo5} class="logo" alt='Logo 5' />
          <img src={logo6} class="logo" alt='Logo 6' />
        </div>
      </div>
      <div className='competitions full-bleed--black'>
        <div className='top'>
          <p>Upcoming Competitions</p>
          <h1>12 Competitions This Season</h1>
          <button type="button" class="btn btn-primary"><CustomLink to='competition'>See More</CustomLink></button>
        </div>
        <div className='list'>
          <div className='main'>
            <img src={placeholder} class="photo" alt='Placeholder' />
            <div className='date'>30th July</div>
            <div className='description'>
              <h5>Previous Competition Picture</h5>
              <p>Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
            </div>
          </div>
          <div className='others'>
            <div className='item'>
              <div className='date'>29 July</div>
              <h5>Competition 1</h5>
              <p> Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
            </div>
            <div className='item'>
              <div className='date'>29 July</div>
              <h5>Competition 2</h5>
              <p> Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
            </div>
            <div className='item'>
              <div className='date'>29 July</div>
              <h5>Competition 3</h5>
              <p> Proin cras id semper tellus euismod aenean est a egestas. Rutrum in ipsum vivamus nunc dignissim sit...</p>
            </div>
          </div>
        </div>
      </div>
      <div className='news__svg--black'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="36" viewBox="0 0 1500 36" fill="none">
            <path d="M0 2.30889e-05L454 24.2105L544 0L0 2.30889e-05Z" fill="black"/>
            <path d="M1292 24.2105L1500 0L1014 1.0678L544 0L664 36L796 14L1032 0L1292 24.2105Z" fill="black"/>
        </svg>
      </div>
      <div className='news__svg--blue'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="511" viewBox="0 0 1500 511" fill="none">
          <path d="M-1066.93 510L1857 1L-1727 510H-1066.93Z" fill="#0A58CA"/>
          <path d="M1857 1L-483.237 510H-101.38L1857 1Z" fill="#0A58CA"/>
          <path d="M1857 1L-1066.93 510H-1727L1857 1ZM1857 1L-483.237 510H-101.38L1857 1Z" stroke="#0A58CA"/>
        </svg>
      </div>
      <div className='news'>
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
                <img src={article.image || placeholder} className="photo" alt={article.title} />
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
      <div className='photos full-bleed--blue'>
        <div className='photos__header'>
          <p>Media Feature</p>
          <h1>Photo Gallery</h1>
        </div>
        <div className='photos__main'>
          <div className='photos__main__row'>
            <img src={placeholder} class="photo" alt='Placeholder' />
            <img src={placeholder} class="photo" alt='Placeholder' />
          </div>
          <div className='photos__main__row'>
            <img src={placeholder} class="photo" alt='Placeholder' />
            <img src={placeholder} class="photo" alt='Placeholder' />
          </div>
        </div>
      </div>
      <div className='medium'>
        <div className='medium__yt'>
          <iframe width="640" height="491" src="https://www.youtube.com/embed/PLNluCohtZ4" title="Aspiring to Accomplished: UCF Student’s Cybersecurity Journey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='medium__text'>
          <h1>Medium Video Layout</h1>
          <p>Commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="6" viewBox="0 0 100 6" fill="none">
            <path d="M0 0.0175781H100V5.01758H0V0.0175781Z" fill="#FFC904"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

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


export default Home