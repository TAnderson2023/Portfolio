import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import Skills from "./pages/skills.jsx";
import DAE from "./pages/2024-DAE.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/dae" element={<DAE />} />
          <Route path="/portfolio/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
