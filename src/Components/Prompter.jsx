import React, { useEffect, useState } from 'react';

// styles import
import '../Styles/Prompter.css';

// data import
// import projects from '../Data/projects.json';

export const Prompter = ({ text }) => {
  
  // Clonar la palabra "03 // Perfil" X veces
    const repeatedText = Array(100).fill(text).join(' ');

  // Detectar el scroll
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      // Agregar el evento de scroll al montar el componente
      window.addEventListener('scroll', handleScroll);

      // Eliminar el evento de scroll al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // La lista de dependencias está vacía para que este efecto solo se ejecute una vez al montar el componente

    // console.log(scrollY);

  return (
    <div className="text_container">
      <span style={{left: scrollY - 10000}}>
        {repeatedText}
      </span>
    </div>
  );
}

export default Prompter;
