import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
