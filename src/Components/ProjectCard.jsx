import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/ProjectCard.css';
import '../Styles/main.css';

export const ProjectCard = ({ projects }) => {
  const bgImage = require(`../Images${projects.bgImage}`); 
  const projectAnimation = require(`../Videos${projects.Animation}`);

  // detectamos el scroll para hacer el efecto parallax
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`project_card ${projects.gridType}`}>

        <div className='project_img' style={{ position: 'relative' }}>
        
        <Link 
          to={`/proyecto/${projects.ID}`} 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
            
          <div
            className='parallax-container'
            style={{
              backgroundImage: `url(${bgImage})`, // Usa la imagen importada
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundPositionY: -scrollPosition * 0.08 + 'px',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              filter: 'grayscale(100%)',
              position: 'absolute',
              zIndex: 1
      
            }}
          ></div>

          <div
            className='project_animation'
            style={{
              position: 'absolute',
              zIndex: 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              overflow: 'hidden'

            }}
          >
             <video 
              src={projectAnimation} autoPlay loop
              style={{width: '100%', height: '100.6%'}}
              >
              </video>
          </div>

        </Link>
        </div>
        
        <h3>{projects.name}</h3>
        <span className='notes'>{projects.AditionalText}</span>

      </div>
    </div>
  );
};

export default ProjectCard;
