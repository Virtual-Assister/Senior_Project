import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import BodyComponent from "./components/Body_2.jsx";
import { Route, Routes } from "react-router-dom";
import { NavBar } from  "./components/NavBar.jsx";
import { About, Contact, Developement } from "./components/pages";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developement" element={<Developement />} />
      </Routes>
    </div>
  );
}

export default App;
