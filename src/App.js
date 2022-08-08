import StudentPage from "./components/StudentPage";
import LandingPage from "./components/LandingPage";
import BusinessPage from "./components/BusinessPage";
import NextPage from "./components/NextPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="business/submitted" element={<NextPage />} />
          <Route path="student/submitted" element={<NextPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
