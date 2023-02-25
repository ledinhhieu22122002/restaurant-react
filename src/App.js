import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/Home/Home";
import MenuPage from "./Pages/Menu/Menu";
import AboutPage from "./Pages/Abouts/About";
import Logo from './assets/img/Logo.svg';
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
