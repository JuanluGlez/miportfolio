import React, { useEffect, useState } from 'react';
import '../Styles/CustomCursor.css';

const CustomCursor = () => {
  const [cursorSize, setCursorSize] = useState(20);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOver = () => {
    setCursorSize(80);
  };

  const handleMouseOut = () => {
    setCursorSize(40);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    const addEventListeners = () => {
      const elements = document.querySelectorAll('a, video, .custom-link');
      elements.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
      });
    };

    const removeEventListeners = () => {
      const elements = document.querySelectorAll('a, video, .custom-link');
      elements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };

    // Add event listeners initially
    addEventListeners();

    // Add event listeners when React Router updates the DOM
    const observer = new MutationObserver(() => {
      removeEventListeners();
      addEventListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        width: cursorSize,
        height: cursorSize,
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CustomCursor;
