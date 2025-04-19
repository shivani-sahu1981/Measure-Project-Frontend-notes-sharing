// src/router.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import StudentLoginPage from './pages/StudentLoginPage.jsx';
import EducatorLoginPage from './pages/EducatorLoginPage.jsx';


import StudentDashboard from './pages/StudentDashboardPage.jsx';
import EducatorDashboard from './pages/EducatorDashboardPage.jsx';


export default function AppRouter() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/student-login" element={<StudentLoginPage />} />
       <Route path="/educator-login" element={<EducatorLoginPage />} />
       <Route path="/dashboard" element={<StudentDashboard />} />
       <Route path="/educator-dashboard" element={<EducatorDashboard />} />
     </Routes>
   </Router>
 );
}
