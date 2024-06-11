import React from 'react';

const SmoothScroll = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Cambia a 'center' si prefieres que el elemento esté centrado en la ventana
        });
      }, 100); // Agrega un retraso de 100 milisegundos al inicio del desplazamiento
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScroll;
