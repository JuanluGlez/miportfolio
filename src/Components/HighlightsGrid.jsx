import React from 'react';
import { useLocation } from 'react-router-dom'; // importa useLocation de react-router-dom

// components imports
import Highlight from './Highlight';

export const HighlightGrid = ({ projects }) => {

  const location = useLocation(); // obtén la ubicación actual de la ruta

  // Función para obtener el último segmento del enlace de la ruta
  const getLastPathSegment = (path) => {
    const segments = path.split('/');
    return segments[segments.length - 1];
  };

  const currentPath = getLastPathSegment(location.pathname); // obtén el último segmento de la ruta actual

  return (
    <article>
        
      {/* Mapea los proyectos y renderiza solo aquellos cuyo ID coincida con el último segmento de la ruta */}
      {projects.map((project) => {
        if (project.ID === currentPath) {
          return <Highlight key={project.ID} project={project} />;
        }
        return null;
      })}
        
    </article> 
  )
}

export default HighlightGrid;