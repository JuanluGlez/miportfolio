import React from 'react';

// styles imports
import '../Styles/ProjectGrid.css';

// components imports
import ProjectCard from './ProjectCard';

// data imports
import projects from '../Data/projects.json';

export const ProjectGrid = () => {

  return (
    <article className='ProjectGrid'>
        <ul>
          {projects.map((projects) => (
            <ProjectCard key={projects.ID} projects={projects} />
          ))}
        </ul>
    </article> 
  )
}

export default ProjectGrid;