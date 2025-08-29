
import Nav from "./components/Nav";
import { Routes, Route } from 'react-router-dom';
// import Home from "./components/HomeSection";
import HomePage from "./pages/HomePage";
//import Mementos from "./pages/Mementos";
// import EcoCraft from "./pages/EcoCraft";
import { useRef } from "react";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
    <ThemeProvider>
      <div className="w-full flex flex-col"> {/*pt-18*/}
      <Nav homeRef={homeRef} workRef={workRef} projectRef={projectRef} contactRef={contactRef}/>
      <Routes>
        <Route path="/" element={<HomePage homeRef={homeRef} workRef={workRef} projectRef={projectRef} contactRef={contactRef} />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/case_studies/mementos" element={<Mementos />} />
        <Route path="/case_studies/ecoc raft" element={<EcoCraft />} />*/}
      </Routes>
      </div>
      </ThemeProvider>
    </>
  );
}


export default App
