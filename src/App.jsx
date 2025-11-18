import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms"; // NEW
import DMCA from "./components/DMCA";   // NEW
import About_Us from "./components/About_Us";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function App() {
  return (
    <Router>

      <NavBar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/about" element={<About_Us />} />
          <Route path="/contact" element={<Contact />} />


          {/* Optional fallback - Page Not Found */}
          <Route
            path="*"
            element={<h2 className="text-center mt-5">404 - Page Not Found</h2>}
          />
        </Routes>
      </main>

      <Footer /> {/* Always visible at the bottom */}
    </Router>

  );
}
