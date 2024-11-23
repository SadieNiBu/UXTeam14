import './Roster.css';
import { useState } from 'react';

const RosterStories = () => {
    const story1 = "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732319382/image2_hs75ml.jpg";
    const story2 = "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732319382/image4_gqy3kw.jpg";
    const story3 = "https://res.cloudinary.com/dpvt0b5wd/image/upload/v1732319382/image1_b7xtin.jpg";
    
    const testimonials = [
        {
            author: "Michael Troisi '21",
            title: 'Information Technology B.S.',
            description: 'I remember spending weeks during our practices to develop new solutions to the interesting challenges that Red Team threw at us. We always had fun doing it; even when the team was pushed to be remote, we pulled together and made it work. Being on the team really pushed my skills to the limit!',
            picture: story1,
        },
        {
            author: "Jonathan Singer '13",
            title: 'Information Technology B.S., CCDC Founder',
            description: "While learning in the classroom can introduce new topics, there is still no replacement for getting hands-on experience. Many of the tools and systems that we competed on, and defended against attacks, are similar to the expensive devices I use today in the workforce. During my interview, sharing my opportunities and exposure to enterprise grade tools helped me stand out against the rest.",
            picture: story2,
        },
        {
            author: "Carlos Beltran '15",
            title: 'Information Technology B.S.',
            description: 'As a Security Engineer, I still “do CCDC" every day. National CCDC puts an entire career into a few short days. Better still, it’s a team sport. It’s a chance to work with a group of people who are all passionate about the same thing. It’s a chance to learn from each other, to teach each other, and to grow together.',
            picture: story3,
        },
    ];

    // Page state
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 1;

    // Calculate total pages
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    // Determine testimonials to display on the current page
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className='stories full-background'>
            <div className='top-vector'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="39" viewBox="0 0 1500 39" fill="none">
                    <path d="M-58 -6.06519L421.121 39L471.777 11.0595L504.493 -6.06519H-58Z" fill="white"/>
                    <path d="M1305.49 30.0652L1525 -15L1012.11 -13.0124L504.493 -6.06519L546.706 -3.0871L637.465 39L782.045 11.0595L1034.27 -3.0871L1305.49 30.0652Z" fill="white"/>
                </svg>
            </div>
            <div className='stories__header'>
                <h1>STUDENT SUCCESS STORIES</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5" fill="none">
                    <path d="M0 0H100V5H0V0Z" fill="#FFC904"/>
                </svg>
            </div>
            <div className='wrapper' id='story-anchor'>
                {currentTestimonials.map((testimonial, index) => (
                    <div className='story' key={index}>
                        <div className='content'>
                            <p>{testimonial.description}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="84" viewBox="0 0 112 84" fill="none">
                                <g opacity="0.12">
                                    <path d="M85.1216 42.7282C95.5692 42.7282 102.61 48.2369 102.61 56.399C102.61 63.7439 94.5177 69.863 83.5577 69.863C71.553 69.863 62.6825 62.5181 62.6825 51.2989C62.6825 25.7985 87.2111 15.5984 102.61 14.3726V25.5917C92.1687 27.0193 80.4301 34.9746 79.9044 43.7522C80.4301 43.5504 82.513 42.7282 85.1216 42.7282ZM31.892 42.7282C42.3263 42.7282 49.3734 48.2369 49.3734 56.399C49.3734 63.7439 41.2815 69.863 30.3215 69.863C18.3168 69.863 9.44629 62.5181 9.44629 51.2989C9.44629 25.7985 33.9749 15.5984 49.3734 14.3726V25.5917C38.9325 27.0193 27.1939 34.9746 26.6682 43.7522C27.1939 43.5504 29.2768 42.7282 31.892 42.7282Z" fill="#050505"/>
                                </g>
                            </svg>
                            <div className='author'>
                                <h3>{testimonial.author}</h3>
                                <div className='body'>{testimonial.title}</div>
                            </div>
                            <img src={testimonial.picture} className="picture" alt={`Student ${index + 1}`} />
                        </div>
                    </div>
                ))}
                <div className='competition-buttons'>
                    <button
                        className='btn btn-primary'
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L1.70711 7L7.35355 12.6464C7.54882 12.8417 7.54882 13.1583 7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536L0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447Z" fill="black"/>
                        </svg>
                        Prev
                    </button>
                    <span className='page-num'>{currentPage} / {totalPages}</span>
                    <button
                        className='btn btn-primary'
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path d="M8.87433 7.51437L4.8083 3.60539C4.69634 3.49801 4.63475 3.35445 4.63475 3.20138C4.63475 3.04821 4.69634 2.90474 4.8083 2.79719L5.16458 2.45485C5.27637 2.34714 5.42579 2.28784 5.58503 2.28784C5.74426 2.28784 5.89351 2.34714 6.00538 2.45485L10.8466 7.10882C10.959 7.21671 11.0205 7.36086 11.02 7.51411C11.0205 7.66804 10.959 7.81202 10.8466 7.91999L6.00989 12.5695C5.89802 12.6772 5.74877 12.7365 5.58945 12.7365C5.43021 12.7365 5.28096 12.6772 5.169 12.5695L4.8128 12.2271C4.58102 12.0043 4.58102 11.6416 4.8128 11.4188L8.87433 7.51437Z" fill="#343A40"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RosterStories;