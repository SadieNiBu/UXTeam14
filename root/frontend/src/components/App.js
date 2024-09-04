import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About"
import Archive from "../pages/Archive"
import Contact from "../pages/Contact"
import Events from "../pages/Events"
import Media from "../pages/Media"
import Roster from "../pages/Roster"
import Testimonials from "../pages/Testimonials"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </>
  )
}

export default App;