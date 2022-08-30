import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Instructor from './pages/Instructor/Instructor';
import InstructorDetail from './pages/InstructorDetail/InstructorDetail';
import Main from './pages/Main/Main';
import Schedule from './pages/Schedule/Schedule';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/instructorDetail/:id" element={<InstructorDetail />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
