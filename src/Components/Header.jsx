import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//import styles
import '../Styles/Header.css';
import '../Styles/tokens.css';

//import images
import logo from '../Images/icon_star.svg';
import soundIcon from '../Images/icon_sound.svg';
import iconArrowRightSimple from '../Images/icon_arrow_right_simple.svg';
import iconClose from '../Images/icon_close.svg';

// import components 
import SmoothScroll from '../Components/SmoothScroll.jsx';

export const Header = ({ menuToLayout }) => {
  const [menuState, setMenuState] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [iframeVisible, setIframeVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };

  useEffect(() => {
    handleResize(); // Llamada inicial al efecto para manejar el estado del menú al cargar la página
    window.addEventListener('resize', handleResize);

    // Limpieza del evento cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    if (iframeVisible) {
      setIframeVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, iframeVisible]);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.sound_button') && !event.target.closest('iframe')) {
      setIframeVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSoundButtonClick = (event) => {
    event.stopPropagation();
    setIframeVisible(!iframeVisible);
  };

  const menuController = () => {
    setMenuState(prevState => !prevState);
    menuToLayout(menuState); //esta es la info que le estamos pasando a Layout
  };

  let menuToggle = menuState ? '' : 'grow';
  let menuElementsToggle = menuState ? '' : 'hidden';
  let iconToggle = menuState ? iconClose : iconArrowRightSimple;
  let menuTextToggle = menuState ? 'Cerrar' : 'Menu';
  let menuBGColor = menuState ? 'menuBG' : '';

  const mainHeaderStyle = {
    marginTop: visible ? '0' : '-100px',
    transition: 'margin-top 0.3s ease-in-out'
  };

  return (
    <div className={`main_header ${menuBGColor} line-appear`} style={mainHeaderStyle}>
      <div className='main_header_content'>
        <div className='logo_container'>
          <img 
            className='logo' 
            src={logo} 
            alt='Logo en forma de estrella de 6 puntas, de color negro'/>
          <span><Link smooth to='/'>JUANLU &nbsp;-- &nbsp;U X // U I</Link></span>
        </div>

        <div className='main_menu'>
          <div className='main_menu_trigger' onClick={menuController}>
            {menuTextToggle}
            <img src={iconToggle} alt='icono de flecha apuntando hacia abajo' />
          </div>
          <ul className={menuToggle}>
            <li className={menuElementsToggle} onClick={menuController}><Link to='/'>Inicio</Link></li>
            <li className={menuElementsToggle} onClick={menuController}><Link smooth to="/#Projects_Section">Proyectos</Link></li>
            <li className={menuElementsToggle} onClick={menuController}><Link smooth to="/#Perfil_Section">Perfil</Link></li>
          </ul>
        </div>
        
        <div className='menu_music'>
          <span>Shawn James -- <i>Burn the witch</i></span>
          <div className='sound_button' onClick={handleSoundButtonClick}>
            <img src={soundIcon} alt='botón para inciar la musica' />
          </div>
        </div>

        <iframe
          style={{
            borderRadius: '12px',
            marginTop: '10px',
            width: '320px',
            height: iframeVisible ? '160px' : '0',
            position: 'absolute',
            top: '56px',
            right: '56px',
            transition: 'ease all .2s'

          }}
          src="https://open.spotify.com/embed/track/1t4MtHUKtJLLWYJirlDGXK?utm_source=generator&theme=0"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Header;
