import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Default route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
