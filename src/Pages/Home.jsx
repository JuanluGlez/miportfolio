import React, { useEffect, useRef, useState } from 'react';

// styles imports

import '../Styles/main.css';
import '../Styles/Home.css';
import '../Styles/animations.css';

// components imports
import ProjectGrid from '../Components/ProjectGrid.jsx';
import Prompter from '../Components/Prompter.jsx';
import Button from '../Components/Button.jsx';
import TextAnimation from '../Components/TextAnimation.jsx';
import transition from '../transition.jsx';

// img imports
import Teide from '../Images/Teide.png';
import iconDownload from '../Images/icon_arrow_download.svg';

export const Home = () => {
  
  document.title = 'Juanlu / Inicio';

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

  // animación texto va apareciendo según baja el scroll

    const [visibleIndex, setVisibleIndex] = useState(-1);
    const [visibleIndex2, setVisibleIndex2] = useState(-1);
    const [visibleIndex3, setVisibleIndex3] = useState(-1);
    const [visibleIndex4, setVisibleIndex4] = useState(-1);

    // lógica del primer párrafo
      useEffect(() => {
        const calculateVisibleIndex = () => {
          // Obtener la posición vertical del elemento con la clase 'landing_paragraph'
          const landingParagraphElement = document.querySelector('.anchorScroll');
          const landingParagraphRect = landingParagraphElement.getBoundingClientRect();
          const landingParagraphY = landingParagraphRect.top + window.scrollY;
      
          // Sumar 100px a la posición vertical del elemento 'landing_paragraph'
          const adjustedY = landingParagraphY - 800;
      
          // Calcular el índice visible a partir de la posición ajustada del elemento 'landing_paragraph'
          const index = Math.floor((scrollY - adjustedY) / 10);
          setVisibleIndex(index >= 0 ? index : -1);
        };
      
        calculateVisibleIndex();
      
        // Limpiar el índice visible cuando el componente se desmonte
        return () => {
          setVisibleIndex(-1);
        };
      }, [scrollY]);

    // lógica del segundo párrafo
    useEffect(() => {
      const calculateVisibleIndex2 = () => {
        // Obtener la posición vertical del elemento con la clase 'landing_paragraph'
        const landingParagraphElement = document.querySelector('.anchorScroll');
        const landingParagraphRect = landingParagraphElement.getBoundingClientRect();
        const landingParagraphY = landingParagraphRect.top + window.scrollY;
    
        // Sumar 100px a la posición vertical del elemento 'landing_paragraph'
        const adjustedY = landingParagraphY - 600;
    
        // Calcular el índice visible a partir de la posición ajustada del elemento 'landing_paragraph'
        const index = Math.floor((scrollY - adjustedY) / 10);
        setVisibleIndex2(index >= 0 ? index : -1);
      };
    
      calculateVisibleIndex2();
    
      // Limpiar el índice visible cuando el componente se desmonte
      return () => {
        setVisibleIndex2(-1);
      };
    }, [scrollY]);

    // lógica del tercer párrafo
      useEffect(() => {
        const calculateVisibleIndex3 = () => {
          // Obtener la posición vertical del elemento con la clase 'landing_paragraph'
          const landingParagraphElement = document.querySelector('.anchorScroll2');
          const landingParagraphRect = landingParagraphElement.getBoundingClientRect();
          const landingParagraphY = landingParagraphRect.top + window.scrollY;
      
          // Sumar 100px a la posición vertical del elemento 'landing_paragraph'
          const adjustedY = landingParagraphY - 600;
      
          // Calcular el índice visible a partir de la posición ajustada del elemento 'landing_paragraph'
          const index = Math.floor((scrollY - adjustedY) / 10);
          setVisibleIndex3(index >= 0 ? index : -1);
        };
      
        calculateVisibleIndex3();
      
        // Limpiar el índice visible cuando el componente se desmonte
        return () => {
          setVisibleIndex3(-1);
        };
      }, [scrollY]);
    
    // lógica del cuarto párrafo
      useEffect(() => {
        const calculateVisibleIndex4 = () => {
          // Obtener la posición vertical del elemento con la clase 'landing_paragraph'
          const landingParagraphElement = document.querySelector('.anchorScroll2');
          const landingParagraphRect = landingParagraphElement.getBoundingClientRect();
          const landingParagraphY = landingParagraphRect.top + window.scrollY;
      
          // Sumar 100px a la posición vertical del elemento 'landing_paragraph'
          const adjustedY = landingParagraphY - 400;
      
          // Calcular el índice visible a partir de la posición ajustada del elemento 'landing_paragraph'
          const index = Math.floor((scrollY - adjustedY) / 10);
          setVisibleIndex4(index >= 0 ? index : -1);
        };
      
        calculateVisibleIndex4();
      
        // Limpiar el índice visible cuando el componente se desmonte
        return () => {
          setVisibleIndex4(-1);
        };
      }, [scrollY]);

    //console.log('alto = ', (window.innerHeight * 9) / 10);
    // console.log('scroll Y =', scrollY);
    // console.log('index =', visibleIndex);

    const palabras1 = ['Soy', 'un', 'diseñador', 'de', 'experiencias', 'de', 'e', 'interfaces', 'de', 'usuario.', 'Me', 'apasiona', 'crear', 'productos', 'usables', 'y', 'accesibles', 'que', 'ayuden', 'a', 'mejorar', 'el', 'mundo.'];
    const palabras2 = ['4', 'AÑOS', 'DE', 'EXPERIENCIA', 'COMO', 'UX/UI,', 'DE', 'CARÁCTER', 'MULTIDISCIPLINAR', 'CON', 'CONOCIMIENTOS', 'EN', 'FRONT', 'END.', 'SIEMPRE', 'EN', 'CONTINUO', 'CRECIMIENTO', 'Y', 'APRENDIZAJE.'];                    
    const palabras3 = ['Hola,', 'mi', 'nombre', 'es', 'Juan', 'luis,', 'aunque', 'prefiero', 'que', 'me', 'llamen', 'juanlu.', 'Soy', 'un', 'diseñador', 'nacido', 'en', 'el', 'archipiélago', 'establecido', 'en', 'Madrid.'];
    const palabras4 = ['cuando', 'no', 'estoy', 'diseñando', 'me', 'gusta', 'seguir', 'superándome', 'en', 'el', 'ámbito', 'de', 'la', 'programación', 'web,', 'y', 'explorar', 'la', 'ciudad', 'en', 'busca', 'de', 'rincones', 'en', 'los', 'que', 'pueda', 'encontrar', 'la', 'inspiración.'];

  return (
    <div className='page_index page_container'>
      <div className='page_intro'>
        <div className='page_header'>
          <h1>
            <span>Soy</span>
            <span className='ocupation'><TextAnimation /></span>
          </h1>
        </div>
        <div className='self_portrait show_animation'></div>
      </div>

      <div className='introduce_myself'>
        <div className='landing_paragraph anchorScroll'>
          <p>
          {palabras1.map((palabra, index) => (
            <span
              key={index}
              className={`word ${index <= visibleIndex ? 'show' : ''}`}
            >
              {palabra}
              
            </span>
          ))}
          </p>
          <p>
          {palabras2.map((palabra, index) => (
            <span
              key={index}
              className={`word ${index <= visibleIndex2 ? 'show' : ''}`}
            >
              {palabra}
              
            </span>
          ))}
          </p>
          
        </div>
      </div>

      <div className='projects_section'>
        <h2 className='opacity_animation' id='Projects_Section'>
          <span>02</span>
          <span>Proyectos</span>
        </h2>
        <div className='projects_grid'>
          <ProjectGrid />
        </div>
      </div>

      <div className='profile_section' id='Perfil_Section'>

        <h2><Prompter text="03 Perfil "/></h2>
        <div className='profile_description'>
          <img src={Teide} alt="fotografía del Teide en blanco y negro" className='opacity_animation'  />
          <div className='landing_paragraph anchorScroll2'>
            <p>
            {palabras3.map((palabra, index) => (
              <span
                key={index}
                className={`word ${index <= visibleIndex3 ? 'show' : ''}`}
              >
                {palabra}
                
              </span>
            ))}
            </p>
            <p>
            {palabras4.map((palabra, index) => (
              <span
                key={index}
                className={`word ${index <= visibleIndex4 ? 'show' : ''}`}
              >
                {palabra}
                
              </span>
            ))}
            </p>
         </div>
        </div>
      </div>

      <div className='skills_section'>
        <h4 className='opacity_animation'>
          <span>3.1</span>
          <span>Aptitudes</span>
        </h4>
        <div className='skills_table'>_
          <h5>Research</h5>
          <div className="grid-container">
            <div className="item opacity_animation">bechmarks</div>
            <div className="item opacity_animation">entrevistas</div>
            <div className="item opacity_animation">encuestas</div>
            <div className="item opacity_animation">heurística</div>
            <div className="item opacity_animation">User persona</div>
            <div className="item opacity_animation">Wireframe</div>
            <div className="item opacity_animation">User test</div>
            <div className="item opacity_animation">Affinity map</div>
            <div className="item opacity_animation">user centered</div>
          </div>
          <h5>Design</h5>
          <div className="grid-container">
            <div className="item opacity_animation">Responsive</div>
            <div className="item opacity_animation">Web design</div>
            <div className="item opacity_animation">App design</div>
            <div className="item opacity_animation">User Flow</div>
            <div className="item opacity_animation">Design system</div>
            <div className="item opacity_animation">Prototipado</div>
            <div className="item opacity_animation">Documentación</div>
            <div className="item opacity_animation">Arquitectura</div>
            <div className="item opacity_animation">Sketch</div>
            <div className="item opacity_animation">Figma</div>
            <div className="item opacity_animation">Zepplin</div>
            <div className="item opacity_animation">Photoshop</div>
            <div className="item opacity_animation">Illustrator</div>
            <div className="item opacity_animation">Lightroom</div>
            <div className="item opacity_animation">Indesign</div>
            <div className="item opacity_animation">Wordpress</div>
            <div className="item opacity_animation">Elementor</div>
            <div className="item opacity_animation">Prestashop</div>
          </div>
          <h5>Front End</h5>
          <div className="grid-container">
            <div className="item opacity_animation">HTML5</div>
            <div className="item opacity_animation">CSS3</div>
            <div className="item opacity_animation">JavaScript</div>
            <div className="item opacity_animation">React</div>
            <div className="item opacity_animation">JSX</div>
            <div className="item opacity_animation">Github</div>
          </div>
        </div>
      </div>
      <div className='resourses_section'>
        <div>
          <span>Mi curriculum</span>
          <Button icon={iconDownload} />
        </div>
      </div>

    </div>
  );
};

export default transition(Home);
