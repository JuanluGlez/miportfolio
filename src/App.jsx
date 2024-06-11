import {  BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

//import routes
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';
import NoPage from './Pages/NoPage';

// styles imports
import './Styles/normalize.css';
import './Styles/CustomScrollbar.css';
import './Styles/App.css';

// data imports
import projectsData from './Data/projects.json';

// components imports
import ScrollToTopOnPageChange from './Components/ScrollOnTop.jsx';
import SmoothScoll from './Components/SmoothScroll.jsx';
import CustomCursor from './Components/CustomCursor.jsx';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <>

    <ScrollToTopOnPageChange />
    <SmoothScoll />
    <CustomCursor />
    
    <AnimatePresence>
      <Routes basename="/" location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            {projectsData.map((project) => (
                <Route
                  key= {project.ID}
                  path={`/proyecto/${project.ID}`} 
                  element= {<ProjectDetails project={ project } />} 
                />
              ))}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
  </>
  );

}

export default App;
