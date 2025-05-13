
import Nav from "./components/Nav";
import {HashRouter, Routes, Route } from 'react-router-dom';
// import Home from "./components/HomeSection";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
//import Mementos from "./pages/Mementos";
// import EcoCraft from "./pages/EcoCraft";

function App() {
  return (
    <>
      <div className="w-full flex flex-col pt-5 sm:pt-2"> {/*pt-18*/}
      <Nav/>
      {/*<HashRouter>
      </HashRouter>*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/case_studies/mementos" element={<Mementos />} />
        <Route path="/case_studies/ecocraft" element={<EcoCraft />} />*/}
      </Routes>
        {/* Nav, Intro, Projects, About, Resume */}
      </div>
    </>
  );
}


export default App
