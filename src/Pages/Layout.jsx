import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

//import components
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

//import styles
import '../Styles/Layout.css';

const Layout = () => {

  // aqui determinamos el ancho de pantalla

    const handleResize = () => {
      setMenuData(menuData);
    };

    useEffect(() => {
      handleResize(); // Llamada inicial al efecto para manejar el estado del menú al cargar la página
      window.addEventListener('resize', handleResize);

      // Limpieza del evento cuando el componente se desmonta
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  // 

  // comunicamos layout con Header para recibir el estado del menú
    const [menuData, setMenuData] = useState(true);

    const menuToLayout = (menuState) => {
      setMenuData(menuState);

    }

    const menuModifier = menuData ? '' : 'menuModify';


  //

  // aquí manejamos el estado del componente según el scroll
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);

    const mainHeaderStyle = {
      marginTop: visible ? '0' : '-100px',
      transition: 'margin-top 0.3s ease-in-out'
    };
  
  //

  return (
    <div className= {`layout ${menuModifier}`}>

      <div className='page_header'>
        <Header menuToLayout = {menuToLayout} />
        <div className='background_blended' style={mainHeaderStyle}></div>
      </div>

      <Outlet />

      <Footer />

    </div>
  );
};

export default Layout;