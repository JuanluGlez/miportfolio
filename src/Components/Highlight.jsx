import React, { useState, useRef, useEffect } from 'react';

// import styles
import '../Styles/main.css';
import '../Styles/Highlight.css';

// component imports
import VideoWithProgress from '../Components/VideoWithProgres.jsx'

export const Highlight = ({ project }) => {
  return (
    <div className='highlight_article'>
      {project.highlights.map((highlight, index) => (
        <div key={index} className='content'>
          {highlight.title && <h4>{highlight.title}</h4>}
          <div className='text'>
            {highlight.paragraph && <p dangerouslySetInnerHTML={{ __html: highlight.paragraph }} />}
            {highlight.video && <VideoWithProgress src={require(`../Videos${highlight.video}`)} />}
            {highlight.paragraph2 && <p dangerouslySetInnerHTML={{ __html: highlight.paragraph2 }} />}
            {highlight.video2 && <VideoWithProgress src={require(`../Videos${highlight.video2}`)} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
