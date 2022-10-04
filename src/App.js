import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/Home";
import MenuPage from "./Pages/Menu";
import AboutPage from "./Pages/About";
import Logo from './img/Logo.svg';
function App() {
  return (
    <>
      <Navbar logo={Logo} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/AboutUs" element={<AboutPage />} />
      </Routes>
    </>)
}

export default App;
