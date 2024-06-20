import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Customer from "./pages/Customer.jsx";
import Physio from "./pages/Physio.jsx";
import Admin from "./pages/Admin.jsx";
import B2BEnquiry from "./pages/B2BEnquiry.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/customer" element={<Customer />} />
        <Route exact path="/physio" element={<Physio />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/b2b-enquiry" element={<B2BEnquiry />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;