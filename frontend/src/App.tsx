import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

const Projects = lazy(() => import("src/projects"));
const HomePage = lazy(() => import("src/Home"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
