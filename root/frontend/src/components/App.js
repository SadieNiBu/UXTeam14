import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About"
import Admin from "../pages/Admin"
import FAQ from "../pages/FAQ"
import Contact from "../pages/Contact"
import Competition from "../pages/Competition"
import Press from "../pages/Press"
import Roster from "../pages/Roster"
import Gallery from "../pages/Gallery"
import Support from "../pages/Support";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/press" element={<Press />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<Support />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;