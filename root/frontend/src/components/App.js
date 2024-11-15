import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About"
import Admin from "../pages/Admin/Admin"
import FAQ from "../pages/FAQ/FAQ"
import Contact from "../pages/Contact/Contact"
import Competition from "../pages/Competition/Competition"
import Press from "../pages/Press/Press"
import Roster from "../pages/Roster/Roster"
import Gallery from "../pages/Gallery/Gallery"
import Support from "../pages/Support/Support";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function App() {
  const { admin } = useAuthContext();

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={admin ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/press" element={<Press />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<Support />}/>
          <Route path="/login" element={!admin ? <Login /> : <Navigate to='/admin' />}/>
          {/* Signup page for testing/development purposes */}
          {/* <Route path="/signup" element={<Signup />}/> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;