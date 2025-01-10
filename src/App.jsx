// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import {  Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Footer,
//   Contact,
//   EarthCanvas,
//   BallCanvas,
//   ComputersCanvas,
//   StarsCanvas} from './components'
// const App = () => {
//   return (
//     <BrowserRouter>
//     <div className="relative z-0 bg-primary text-white">
//       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
//         <Navbar />
//         <Hero />
//       </div>
//       <About />
//       <Experience />
//       <Tech />
//       <Works />
//       <Feedbacks />
//       <div className="relative z-0">
//         <Contact />
//         <StarsCanvas />
//       </div>
//       <Footer />
//     </div>
//     </BrowserRouter>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Footer,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary text-white">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = () => (<>

  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
  <Navbar />
  <Hero />
</div>
  <div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact /> 
      <StarsCanvas />
    </div>
</div>
<Footer />
</>
);

export default App;
