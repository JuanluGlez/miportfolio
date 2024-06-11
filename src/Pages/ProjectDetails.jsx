import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoWithProgress from '../Components/VideoWithProgres.jsx';

// import styles
import '../Styles/ProjectDetails.css';
import '../Styles/main.css';
import '../Styles/animations.css';

// import components
import Prompter from '../Components/Prompter.jsx';
import HighlightsGrid from '../Components/HighlightsGrid.jsx';
import ProjectPrefooter from '../Components/ProjectPrefooter.jsx';
import transition from '../transition.jsx';

// data imports
import projectsData from '../Data/projects.json';

const ProjectDetails = ({ project }) => {
  const location = useLocation();
  const [videoSrc, setVideoSrc] = useState('');
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if (project) {
      document.title = `Proyecto / ${project.title}`;
    }
  }, [project]);

  useEffect(() => {
    const loadVideo = async () => {
      if (project) {
        try {
          const video = await import(`../Videos${project.poster}`);
          setVideoSrc(video.default);
        } catch (error) {
          console.error('Error loading video:', error);
        }
      }
    };

    loadVideo();
  }, [project, location.pathname]);

  useEffect(() => {
    const loadImage = async () => {
      if (project) {
        try {
          const image = await import(`../Images${project.posterBG}`);
          setBgImage(image.default);
        } catch (error) {
          console.error('Error loading image:', error);
        }
      }
    };

    loadImage();
  }, [project, location.pathname]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const hasHighlights = project.highlights.some(highlight =>
    highlight.title || highlight.paragraph || highlight.video || highlight.paragraph2 || highlight.video2
  );

  return (
    <div className='page_container projectDetails_page'>
      <div className='project_intro'>
        <div className='principal_info'>
          <h1 className='project_principal_header'>{project.title}</h1>
          <div className='project_thumbnail'>
            {videoSrc && <VideoWithProgress key={location.pathname} src={videoSrc} />}
          </div>
        </div>
        <ul className='notes project_credits'>
          <li>
            <span>Fecha</span>
            <span>// {project.date}</span>
          </li>
          <li>
            <span>Cliente</span>
            <span>// {project.client}</span>
          </li>
          <li>
            <span>Mis roles</span>
            <span>// {project.roles}</span>
          </li>
          <li>
            <span>Site url</span>
            <span>// <a href={project.siteUrl} target='_blank' rel='noopener noreferrer'>{project.siteName}</a></span>
          </li>
        </ul>
      </div>
      <div className='project_context'>
        <div className='context'>
          <h4>Contexto</h4>
          <p dangerouslySetInnerHTML={{ __html: project.context }}></p>
        </div>
        <div className='challenge'>
          <h4>Reto</h4>
          <p dangerouslySetInnerHTML={{ __html: project.challenge }}></p>
        </div>
      </div>
      {hasHighlights && (
        <div className='project_highlights'>
          <h3><Prompter text="Highlights" /></h3>
          <HighlightsGrid projects={projectsData} />
        </div>
      )}
      <ProjectPrefooter currentProject={project} projects={projectsData} />
    </div>
  );
}

export default transition(ProjectDetails);
