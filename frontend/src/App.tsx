import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Projects = lazy(() => import("src/projects"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/projects" />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
