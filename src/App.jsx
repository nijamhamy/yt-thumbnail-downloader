import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NavBar from "./components/NavBar";
import About_Us from "./components/About_Us";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About_Us />} />
      </Routes>
    </Router>
  );
}
