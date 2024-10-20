import HomePage from "./components/Home_/mainPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/About_US/AboutUs";
import ContactUS from "./components/Contact_Us/ContactUS";
import Shop from "./components/Shop/Shop.jsx";
import SignUp from "./components/Sign up/signUpForm.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Sign_up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
