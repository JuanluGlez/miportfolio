import React, { useState, useEffect } from 'react';
import '../Styles/TextAnimation.css'; // Archivo de estilos CSS

const TextAnimation = () => {
  const [currentText, setCurrentText] = useState('Juanlu');
  const [targetText, setTargetText] = useState('UX // UI');
  const [showingFirstText, setShowingFirstText] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (showingFirstText) {
      // Espera 1 segundo antes de cambiar al segundo texto
      const timeout = setTimeout(() => {
        setShowingFirstText(false);
        setIndex(0); // Reinicia el índice para empezar el reemplazo letra por letra
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      // Reemplaza letra por letra hasta mostrar el segundo texto completo
      const interval = setInterval(() => {
        if (index < targetText.length) {
          setCurrentText(prevText => {
            const newText = prevText.substring(0, index) + targetText[index] + prevText.substring(index + 1);
            return newText;
          });
          setIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 50); // Intervalo de tiempo entre cada letra (en milisegundos)

      return () => clearInterval(interval);
    }
  }, [index, targetText, showingFirstText]);

  return (
    <div className="text-animation">
      {currentText}
    </div>
  );
};

export default TextAnimation;
