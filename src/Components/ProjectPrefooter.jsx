import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button.jsx';

import '../Styles/ProjectPrefooter.css';

import iconTopLeftArrow from '../Images/icon_arrow_top_left.svg';
import iconTopRightArrow from '../Images/icon_Arrow_top_right.svg';
import iconTopArrow from '../Images/icon_arrow_top.svg';

const ProjectPrefooter = ({ currentProject, projects }) => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Encontrar el índice del proyecto actual
  const currentIndex = projects.findIndex(p => p.ID === currentProject.ID);

  // Obtener los índices de los proyectos anterior y siguiente
  let previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  let nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className='ProjectPrefooter'>
      
      <div className='back_to_top'>
        <span>Volver arriba</span>
        <div onClick={scrollToTop}>
          <Button icon={iconTopArrow}/>
        </div>
      </div>
      
      <div className='projects_wrapper'>
        <ul>
          <li>
            {projects[previousIndex] && (
              <>
                <Link to={`/proyecto/${projects[previousIndex].ID}`}>
                  <Button icon={iconTopLeftArrow} />
                </Link>
                <span>{projects[previousIndex].namelink}</span>
              </>
            )}
          </li>
          <li>
            {projects[nextIndex] && (
              <>
                <Link to={`/proyecto/${projects[nextIndex].ID}`}>
                  <Button icon={iconTopRightArrow} />
                </Link>
                <span>{projects[nextIndex].namelink}</span>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectPrefooter;

